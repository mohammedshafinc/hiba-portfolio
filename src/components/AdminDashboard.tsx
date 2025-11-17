'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  source: string;
  date: string;
  thumbnail: string;
  link: string;
  type: string;
}

interface CopywritingWork {
  id: string;
  thumbnail: string;
  link: string;
  description: string;
  type: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'articles' | 'copywriting'>('articles');
  
  // Article form state
  const [articleForm, setArticleForm] = useState({
    title: '',
    excerpt: '',
    source: '',
    date: '',
    thumbnail: '',
    link: '',
  });

  // Copywriting form state
  const [copywritingForm, setCopywritingForm] = useState({
    thumbnail: '',
    link: '',
    description: '',
  });

  // Data state
  const [articles, setArticles] = useState<Article[]>([]);
  const [copywritingWorks, setCopywritingWorks] = useState<CopywritingWork[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Edit state
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [editingCopywritingId, setEditingCopywritingId] = useState<string | null>(null);
  const [editArticleForm, setEditArticleForm] = useState({
    title: '',
    excerpt: '',
    source: '',
    date: '',
    thumbnail: '',
    link: '',
  });
  const [editCopywritingForm, setEditCopywritingForm] = useState({
    thumbnail: '',
    link: '',
    description: '',
  });

  // Load data
  useEffect(() => {
    loadArticles();
    loadCopywritingWorks();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await fetch('/api/articles');
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Failed to load articles:', error);
    }
  };

  const loadCopywritingWorks = async () => {
    try {
      const response = await fetch('/api/copywriting');
      const data = await response.json();
      setCopywritingWorks(data);
    } catch (error) {
      console.error('Failed to load copywriting works:', error);
    }
  };

  const handleArticleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(articleForm),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Article added successfully!' });
        setArticleForm({
          title: '',
          excerpt: '',
          source: '',
          date: '',
          thumbnail: '',
          link: '',
        });
        loadArticles();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to add article' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCopywritingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/copywriting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(copywritingForm),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Copywriting work added successfully!' });
        setCopywritingForm({
          thumbnail: '',
          link: '',
          description: '',
        });
        loadCopywritingWorks();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to add copywriting work' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm('Are you sure you want to delete this article?')) return;

    try {
      const response = await fetch(`/api/articles?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Article deleted successfully!' });
        loadArticles();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to delete article' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    }
  };

  const handleDeleteCopywriting = async (id: string) => {
    if (!confirm('Are you sure you want to delete this copywriting work?')) return;

    try {
      const response = await fetch(`/api/copywriting?id=${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Copywriting work deleted successfully!' });
        loadCopywritingWorks();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to delete copywriting work' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    }
  };

  const handleEditArticle = (article: Article) => {
    setEditingArticleId(article.id);
    setEditArticleForm({
      title: article.title,
      excerpt: article.excerpt,
      source: article.source,
      date: article.date,
      thumbnail: article.thumbnail,
      link: article.link,
    });
  };

  const handleEditCopywriting = (work: CopywritingWork) => {
    setEditingCopywritingId(work.id);
    setEditCopywritingForm({
      thumbnail: work.thumbnail,
      link: work.link,
      description: work.description,
    });
  };

  const handleUpdateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingArticleId) return;

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingArticleId, ...editArticleForm }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Article updated successfully!' });
        setEditingArticleId(null);
        loadArticles();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to update article' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateCopywriting = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCopywritingId) return;

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/copywriting', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingCopywritingId, ...editCopywritingForm }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Copywriting work updated successfully!' });
        setEditingCopywritingId(null);
        loadCopywritingWorks();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to update copywriting work' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingArticleId(null);
    setEditingCopywritingId(null);
    setEditArticleForm({
      title: '',
      excerpt: '',
      source: '',
      date: '',
      thumbnail: '',
      link: '',
    });
    setEditCopywritingForm({
      thumbnail: '',
      link: '',
      description: '',
    });
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/admin/login');
      router.refresh();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-serif font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Manage your published stories and copywriting works</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'articles'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Published Stories
            </button>
            <button
              onClick={() => setActiveTab('copywriting')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                activeTab === 'copywriting'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Copywriting Works
            </button>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 border border-green-200 text-green-700'
                : 'bg-red-50 border border-red-200 text-red-700'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Articles Tab */}
        {activeTab === 'articles' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Add Article Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Article</h2>
              <form onSubmit={handleArticleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="article-title">Title</Label>
                  <Input
                    id="article-title"
                    value={articleForm.title}
                    onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="article-excerpt">Excerpt</Label>
                  <Textarea
                    id="article-excerpt"
                    value={articleForm.excerpt}
                    onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
                    required
                    rows={3}
                  />
                </div>
                <div>
                  <Label htmlFor="article-source">Source</Label>
                  <Input
                    id="article-source"
                    value={articleForm.source}
                    onChange={(e) => setArticleForm({ ...articleForm, source: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="article-date">Date</Label>
                  <Input
                    id="article-date"
                    value={articleForm.date}
                    onChange={(e) => setArticleForm({ ...articleForm, date: e.target.value })}
                    required
                    placeholder="e.g., 27th September 2024"
                  />
                </div>
                <div>
                  <Label htmlFor="article-thumbnail">Thumbnail URL</Label>
                  <Input
                    id="article-thumbnail"
                    type="url"
                    value={articleForm.thumbnail}
                    onChange={(e) => setArticleForm({ ...articleForm, thumbnail: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="article-link">Article Link</Label>
                  <Input
                    id="article-link"
                    type="url"
                    value={articleForm.link}
                    onChange={(e) => setArticleForm({ ...articleForm, link: e.target.value })}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                >
                  {loading ? 'Adding...' : 'Add Article'}
                </Button>
              </form>
            </div>

            {/* Articles List */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Existing Articles ({articles.length})</h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {articles.map((article) => (
                  <div key={article.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    {editingArticleId === article.id ? (
                      <form onSubmit={handleUpdateArticle} className="space-y-4">
                        <div>
                          <Label htmlFor="edit-article-title">Title</Label>
                          <Input
                            id="edit-article-title"
                            value={editArticleForm.title}
                            onChange={(e) => setEditArticleForm({ ...editArticleForm, title: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-article-excerpt">Excerpt</Label>
                          <Textarea
                            id="edit-article-excerpt"
                            value={editArticleForm.excerpt}
                            onChange={(e) => setEditArticleForm({ ...editArticleForm, excerpt: e.target.value })}
                            required
                            rows={3}
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-article-source">Source</Label>
                          <Input
                            id="edit-article-source"
                            value={editArticleForm.source}
                            onChange={(e) => setEditArticleForm({ ...editArticleForm, source: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-article-date">Date</Label>
                          <Input
                            id="edit-article-date"
                            value={editArticleForm.date}
                            onChange={(e) => setEditArticleForm({ ...editArticleForm, date: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-article-thumbnail">Thumbnail URL</Label>
                          <Input
                            id="edit-article-thumbnail"
                            type="url"
                            value={editArticleForm.thumbnail}
                            onChange={(e) => setEditArticleForm({ ...editArticleForm, thumbnail: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-article-link">Article Link</Label>
                          <Input
                            id="edit-article-link"
                            type="url"
                            value={editArticleForm.link}
                            onChange={(e) => setEditArticleForm({ ...editArticleForm, link: e.target.value })}
                            required
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700"
                          >
                            {loading ? 'Updating...' : 'Update'}
                          </Button>
                          <Button
                            type="button"
                            onClick={handleCancelEdit}
                            variant="outline"
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <>
                        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{article.source} • {article.date}</p>
                        <div className="flex gap-2 mt-2">
                          <Button
                            onClick={() => handleEditArticle(article)}
                            variant="outline"
                            size="sm"
                            className="flex-1"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDeleteArticle(article.id)}
                            variant="destructive"
                            size="sm"
                            className="flex-1 text-white"
                          >
                            Delete
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
                {articles.length === 0 && (
                  <p className="text-gray-500 text-center py-8">No articles yet. Add your first article!</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Copywriting Tab */}
        {activeTab === 'copywriting' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Add Copywriting Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Copywriting Work</h2>
              <form onSubmit={handleCopywritingSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="copywriting-thumbnail">Thumbnail Path</Label>
                  <Input
                    id="copywriting-thumbnail"
                    value={copywritingForm.thumbnail}
                    onChange={(e) => setCopywritingForm({ ...copywritingForm, thumbnail: e.target.value })}
                    required
                    placeholder="e.g., /copyright/cp1.png"
                  />
                </div>
                <div>
                  <Label htmlFor="copywriting-link">Link</Label>
                  <Input
                    id="copywriting-link"
                    type="url"
                    value={copywritingForm.link}
                    onChange={(e) => setCopywritingForm({ ...copywritingForm, link: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="copywriting-description">Description</Label>
                  <Textarea
                    id="copywriting-description"
                    value={copywritingForm.description}
                    onChange={(e) => setCopywritingForm({ ...copywritingForm, description: e.target.value })}
                    required
                    rows={3}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700"
                >
                  {loading ? 'Adding...' : 'Add Copywriting Work'}
                </Button>
              </form>
            </div>

            {/* Copywriting Works List */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Existing Works ({copywritingWorks.length})</h2>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {copywritingWorks.map((work) => (
                  <div key={work.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    {editingCopywritingId === work.id ? (
                      <form onSubmit={handleUpdateCopywriting} className="space-y-4">
                        <div>
                          <Label htmlFor="edit-copywriting-thumbnail">Thumbnail Path</Label>
                          <Input
                            id="edit-copywriting-thumbnail"
                            value={editCopywritingForm.thumbnail}
                            onChange={(e) => setEditCopywritingForm({ ...editCopywritingForm, thumbnail: e.target.value })}
                            required
                            placeholder="e.g., /copyright/cp1.png"
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-copywriting-link">Link</Label>
                          <Input
                            id="edit-copywriting-link"
                            type="url"
                            value={editCopywritingForm.link}
                            onChange={(e) => setEditCopywritingForm({ ...editCopywritingForm, link: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="edit-copywriting-description">Description</Label>
                          <Textarea
                            id="edit-copywriting-description"
                            value={editCopywritingForm.description}
                            onChange={(e) => setEditCopywritingForm({ ...editCopywritingForm, description: e.target.value })}
                            required
                            rows={3}
                          />
                        </div>
                        <div className="flex gap-2">
                          <Button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700"
                          >
                            {loading ? 'Updating...' : 'Update'}
                          </Button>
                          <Button
                            type="button"
                            onClick={handleCancelEdit}
                            variant="outline"
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    ) : (
                      <div className="flex items-start gap-4">
                        <img
                          src={work.thumbnail}
                          alt={work.description}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800 mb-1">{work.description}</p>
                          <p className="text-xs text-gray-500 mb-2 truncate">{work.link}</p>
                          <div className="flex gap-2 mt-2">
                            <Button
                              onClick={() => handleEditCopywriting(work)}
                              variant="outline"
                              size="sm"
                              className="flex-1"
                            >
                              Edit
                            </Button>
                            <Button
                              onClick={() => handleDeleteCopywriting(work.id)}
                              variant="destructive"
                              size="sm"
                              className="flex-1 text-white"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {copywritingWorks.length === 0 && (
                  <p className="text-gray-500 text-center py-8">No copywriting works yet. Add your first work!</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

