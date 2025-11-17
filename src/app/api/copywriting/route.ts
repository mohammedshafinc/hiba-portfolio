import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { isAuthenticated } from '@/lib/auth';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const COPYWRITING_FILE = join(DATA_DIR, 'copywriting.json');

// GET - Read all copywriting works
export async function GET() {
  try {
    const data = readFileSync(COPYWRITING_FILE, 'utf-8');
    const works = JSON.parse(data);
    return NextResponse.json(works);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read copywriting works' },
      { status: 500 }
    );
  }
}

// POST - Add new copywriting work
export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const data = readFileSync(COPYWRITING_FILE, 'utf-8');
    const works = JSON.parse(data);
    
    const newWork = {
      id: Date.now().toString(),
      ...body,
      type: 'copywriting',
    };
    
    works.push(newWork);
    writeFileSync(COPYWRITING_FILE, JSON.stringify(works, null, 2));
    
    return NextResponse.json({ success: true, work: newWork });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add copywriting work' },
      { status: 500 }
    );
  }
}

// PUT - Update copywriting work
export async function PUT(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { error: 'Work ID is required' },
        { status: 400 }
      );
    }

    const data = readFileSync(COPYWRITING_FILE, 'utf-8');
    const works = JSON.parse(data);
    const index = works.findIndex((work: any) => work.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Copywriting work not found' },
        { status: 404 }
      );
    }

    works[index] = { ...works[index], ...updateData };
    writeFileSync(COPYWRITING_FILE, JSON.stringify(works, null, 2));
    
    return NextResponse.json({ success: true, work: works[index] });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update copywriting work' },
      { status: 500 }
    );
  }
}

// DELETE - Delete copywriting work
export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { error: 'Work ID is required' },
        { status: 400 }
      );
    }

    const data = readFileSync(COPYWRITING_FILE, 'utf-8');
    const works = JSON.parse(data);
    const filtered = works.filter((work: any) => work.id !== id);
    
    writeFileSync(COPYWRITING_FILE, JSON.stringify(filtered, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete copywriting work' },
      { status: 500 }
    );
  }
}

