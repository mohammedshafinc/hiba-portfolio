import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { isAuthenticated } from '@/lib/auth';

const DATA_DIR = join(process.cwd(), 'src', 'data');
const ARTICLES_FILE = join(DATA_DIR, 'articles.json');

// GET - Read all articles
export async function GET() {
  try {
    const data = readFileSync(ARTICLES_FILE, 'utf-8');
    const articles = JSON.parse(data);
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read articles' },
      { status: 500 }
    );
  }
}

// POST - Add new article
export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const data = readFileSync(ARTICLES_FILE, 'utf-8');
    const articles = JSON.parse(data);
    
    const newArticle = {
      id: Date.now().toString(),
      ...body,
      type: 'article',
    };
    
    articles.push(newArticle);
    writeFileSync(ARTICLES_FILE, JSON.stringify(articles, null, 2));
    
    return NextResponse.json({ success: true, article: newArticle });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add article' },
      { status: 500 }
    );
  }
}

// PUT - Update article
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
        { error: 'Article ID is required' },
        { status: 400 }
      );
    }

    const data = readFileSync(ARTICLES_FILE, 'utf-8');
    const articles = JSON.parse(data);
    const index = articles.findIndex((article: any) => article.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      );
    }

    articles[index] = { ...articles[index], ...updateData };
    writeFileSync(ARTICLES_FILE, JSON.stringify(articles, null, 2));
    
    return NextResponse.json({ success: true, article: articles[index] });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update article' },
      { status: 500 }
    );
  }
}

// DELETE - Delete article
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
        { error: 'Article ID is required' },
        { status: 400 }
      );
    }

    const data = readFileSync(ARTICLES_FILE, 'utf-8');
    const articles = JSON.parse(data);
    const filtered = articles.filter((article: any) => article.id !== id);
    
    writeFileSync(ARTICLES_FILE, JSON.stringify(filtered, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete article' },
      { status: 500 }
    );
  }
}

