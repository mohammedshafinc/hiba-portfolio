'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

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

interface MalayalamCopywritingWork {
  id: string;
  thumbnail: string;
  link: string;
  description: string;
  type: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'articles' | 'malayalamCopywriting' | 'copywriting'>('articles');
  
  // Article form state
  const [articleForm, setArticleForm] = useState({
    title: '',
    excerpt: '',
    source: '',
    date: '',
    thumbnail: '',
    link: '',
  });
  const [articleThumbnailPreview, setArticleThumbnailPreview] = useState<string | null>(null);
  const [articleThumbnailMode, setArticleThumbnailMode] = useState<'url' | 'upload'>('url');

  // Copywriting form state
  const [copywritingForm, setCopywritingForm] = useState({
    thumbnail: '',
    link: '',
    description: '',
  });

  // Malayalam Copywriting form state
  const [malayalamCopywritingForm, setMalayalamCopywritingForm] = useState({
    thumbnail: '',
    link: '',
    description: '',
  });

  // Data state
  const [articles, setArticles] = useState<Article[]>([]);
  const [malayalamCopywritingWorks, setMalayalamCopywritingWorks] = useState<MalayalamCopywritingWork[]>([]);
  const [copywritingWorks, setCopywritingWorks] = useState<CopywritingWork[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Delete dialog state
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<{ id: string; type: 'article' | 'malayalamCopywriting' | 'copywriting'; title?: string } | null>(null);
  
  // Edit state
  const [editingArticleId, setEditingArticleId] = useState<string | null>(null);
  const [editingMalayalamCopywritingId, setEditingMalayalamCopywritingId] = useState<string | null>(null);
  const [editingCopywritingId, setEditingCopywritingId] = useState<string | null>(null);
  const [editArticleForm, setEditArticleForm] = useState({
    title: '',
    excerpt: '',
    source: '',
    date: '',
    thumbnail: '',
    link: '',
  });
  const [editArticleThumbnailPreview, setEditArticleThumbnailPreview] = useState<string | null>(null);
  const [editArticleThumbnailMode, setEditArticleThumbnailMode] = useState<'url' | 'upload'>('url');
  const [editMalayalamCopywritingForm, setEditMalayalamCopywritingForm] = useState({
    thumbnail: '',
    link: '',
    description: '',
  });
  const [editCopywritingForm, setEditCopywritingForm] = useState({
    thumbnail: '',
    link: '',
    description: '',
  });

  // Load data
  useEffect(() => {
    loadArticles();
    loadMalayalamCopywritingWorks();
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

  const loadMalayalamCopywritingWorks = async () => {
    try {
      const response = await fetch('/api/malayalam-copywriting');
      const data = await response.json();
      setMalayalamCopywritingWorks(data);
    } catch (error) {
      console.error('Failed to load malayalam copywriting works:', error);
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
        setArticleThumbnailPreview(null);
        setArticleThumbnailMode('url');
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

  const handleMalayalamCopywritingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/malayalam-copywriting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(malayalamCopywritingForm),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Malayalam copywriting work added successfully!' });
        setMalayalamCopywritingForm({
          thumbnail: '',
          link: '',
          description: '',
        });
        loadMalayalamCopywritingWorks();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to add malayalam copywriting work' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteArticle = (id: string, title?: string) => {
    setItemToDelete({ id, type: 'article', title });
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!itemToDelete) return;

    try {
      const endpoint =
        itemToDelete.type === 'article'
          ? '/api/articles'
          : itemToDelete.type === 'malayalamCopywriting'
            ? '/api/malayalam-copywriting'
            : '/api/copywriting';
      const response = await fetch(`${endpoint}?id=${itemToDelete.id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: 'success',
          text:
            itemToDelete.type === 'article'
              ? 'Article deleted successfully!'
              : itemToDelete.type === 'malayalamCopywriting'
                ? 'Malayalam copywriting work deleted successfully!'
                : 'Copywriting work deleted successfully!',
        });
        if (itemToDelete.type === 'article') {
          loadArticles();
        } else if (itemToDelete.type === 'malayalamCopywriting') {
          loadMalayalamCopywritingWorks();
        } else {
          loadCopywritingWorks();
        }
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to delete item' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const handleDeleteCopywriting = (id: string, description?: string) => {
    setItemToDelete({ id, type: 'copywriting', title: description });
    setDeleteDialogOpen(true);
  };

  const handleDeleteMalayalamCopywriting = (id: string, description?: string) => {
    setItemToDelete({ id, type: 'malayalamCopywriting', title: description });
    setDeleteDialogOpen(true);
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
    setEditArticleThumbnailPreview(article.thumbnail);
    setEditArticleThumbnailMode(article.thumbnail.startsWith('data:') ? 'upload' : 'url');
  };

  const handleEditCopywriting = (work: CopywritingWork) => {
    setEditingCopywritingId(work.id);
    setEditCopywritingForm({
      thumbnail: work.thumbnail,
      link: work.link,
      description: work.description,
    });
  };

  const handleEditMalayalamCopywriting = (work: MalayalamCopywritingWork) => {
    setEditingMalayalamCopywritingId(work.id);
    setEditMalayalamCopywritingForm({
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

  const handleUpdateMalayalamCopywriting = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMalayalamCopywritingId) return;

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/malayalam-copywriting', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: editingMalayalamCopywritingId, ...editMalayalamCopywritingForm }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: 'Malayalam copywriting work updated successfully!' });
        setEditingMalayalamCopywritingId(null);
        loadMalayalamCopywritingWorks();
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to update malayalam copywriting work' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingArticleId(null);
    setEditingMalayalamCopywritingId(null);
    setEditingCopywritingId(null);
    setEditArticleForm({
      title: '',
      excerpt: '',
      source: '',
      date: '',
      thumbnail: '',
      link: '',
    });
    setEditMalayalamCopywritingForm({
      thumbnail: '',
      link: '',
      description: '',
    });
    setEditCopywritingForm({
      thumbnail: '',
      link: '',
      description: '',
    });
    setEditArticleThumbnailPreview(null);
    setEditArticleThumbnailMode('url');
  };

  const handleImageUpload = (
    file: File,
    setThumbnail: (value: string) => void,
    setPreview: (value: string | null) => void
  ) => {
    if (!file.type.startsWith('image/')) {
      setMessage({ type: 'error', text: 'Please select a valid image file' });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMessage({ type: 'error', text: 'Image size must be less than 5MB' });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setThumbnail(base64String);
      setPreview(base64String);
    };
    reader.onerror = () => {
      setMessage({ type: 'error', text: 'Failed to read image file' });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (
    setThumbnail: (value: string) => void,
    setPreview: (value: string | null) => void
  ) => {
    setThumbnail('');
    setPreview(null);
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
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-3xl font-serif font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </CardTitle>
                <CardDescription className="mt-1">
                  Manage your published stories and copywriting works
                </CardDescription>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50"
              >
                Logout
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* Message */}
        {message && (
          <Alert
            variant={message.type === 'success' ? 'success' : 'destructive'}
          >
            <AlertDescription>{message.text}</AlertDescription>
          </Alert>
        )}

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as 'articles' | 'malayalamCopywriting' | 'copywriting')
          }
          className="w-full"
        >
          <Card>
            <CardContent className="p-0">
              <TabsList className="grid w-full grid-cols-3 h-auto bg-transparent border-b rounded-none">
                <TabsTrigger
                  value="articles"
                  className={cn(
                    'rounded-none border-b-2 border-transparent py-4 px-6',
                    activeTab === 'articles' && 'border-indigo-600 bg-transparent shadow-none text-indigo-600'
                  )}
                >
                  Published Stories
                </TabsTrigger>
                <TabsTrigger
                  value="malayalamCopywriting"
                  className={cn(
                    'rounded-none border-b-2 border-transparent py-4 px-6',
                    activeTab === 'malayalamCopywriting' && 'border-indigo-600 bg-transparent shadow-none text-indigo-600'
                  )}
                >
                  Malayalam Copywriting
                </TabsTrigger>
                <TabsTrigger
                  value="copywriting"
                  className={cn(
                    'rounded-none border-b-2 border-transparent py-4 px-6',
                    activeTab === 'copywriting' && 'border-indigo-600 bg-transparent shadow-none text-indigo-600'
                  )}
                >
                  Copywriting Works
                </TabsTrigger>
              </TabsList>
            </CardContent>
          </Card>

          {/* Articles Tab */}
          <TabsContent value="articles" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Add Article Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Article</CardTitle>
                </CardHeader>
                <CardContent>
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
                  <Label htmlFor="article-thumbnail">Thumbnail</Label>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Button
                        type="button"
                        variant={articleThumbnailMode === 'url' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => {
                          setArticleThumbnailMode('url');
                          setArticleThumbnailPreview(null);
                        }}
                        className="flex-1"
                      >
                        URL
                      </Button>
                      <Button
                        type="button"
                        variant={articleThumbnailMode === 'upload' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setArticleThumbnailMode('upload')}
                        className="flex-1"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        Upload
                      </Button>
                    </div>

                    {articleThumbnailMode === 'url' ? (
                      <Input
                        id="article-thumbnail"
                        type="url"
                        value={articleForm.thumbnail}
                        onChange={(e) => {
                          setArticleForm({ ...articleForm, thumbnail: e.target.value });
                          setArticleThumbnailPreview(e.target.value);
                        }}
                        placeholder="https://example.com/image.jpg"
                        required
                      />
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Input
                            id="article-thumbnail-file"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                handleImageUpload(
                                  file,
                                  (value) => setArticleForm({ ...articleForm, thumbnail: value }),
                                  setArticleThumbnailPreview
                                );
                              }
                            }}
                            className="flex-1"
                            required={!articleForm.thumbnail}
                          />
                        </div>
                      </div>
                    )}

                    {articleThumbnailPreview && (
                      <div className="relative border rounded-lg p-2 bg-gray-50">
                        <img
                          src={articleThumbnailPreview}
                          alt="Thumbnail preview"
                          className="w-full h-48 object-cover rounded"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-4 right-4 h-8 w-8"
                          onClick={() =>
                            handleRemoveImage(
                              (value) => setArticleForm({ ...articleForm, thumbnail: value }),
                              setArticleThumbnailPreview
                            )
                          }
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
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
                </CardContent>
              </Card>

              {/* Articles List */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Existing Articles{' '}
                    <Badge variant="secondary" className="ml-2">
                      {articles.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                          <Label htmlFor="edit-article-thumbnail">Thumbnail</Label>
                          <div className="space-y-3">
                            <div className="flex gap-2">
                              <Button
                                type="button"
                                variant={editArticleThumbnailMode === 'url' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => {
                                  setEditArticleThumbnailMode('url');
                                  if (!editArticleForm.thumbnail.startsWith('data:')) {
                                    setEditArticleThumbnailPreview(editArticleForm.thumbnail);
                                  }
                                }}
                                className="flex-1"
                              >
                                URL
                              </Button>
                              <Button
                                type="button"
                                variant={editArticleThumbnailMode === 'upload' ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setEditArticleThumbnailMode('upload')}
                                className="flex-1"
                              >
                                <Upload className="w-4 h-4 mr-2" />
                                Upload
                              </Button>
                            </div>

                            {editArticleThumbnailMode === 'url' ? (
                              <Input
                                id="edit-article-thumbnail"
                                type="url"
                                value={editArticleForm.thumbnail}
                                onChange={(e) => {
                                  setEditArticleForm({ ...editArticleForm, thumbnail: e.target.value });
                                  setEditArticleThumbnailPreview(e.target.value);
                                }}
                                placeholder="https://example.com/image.jpg"
                                required
                              />
                            ) : (
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Input
                                    id="edit-article-thumbnail-file"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                      const file = e.target.files?.[0];
                                      if (file) {
                                        handleImageUpload(
                                          file,
                                          (value) => setEditArticleForm({ ...editArticleForm, thumbnail: value }),
                                          setEditArticleThumbnailPreview
                                        );
                                      }
                                    }}
                                    className="flex-1"
                                    required={!editArticleForm.thumbnail}
                                  />
                                </div>
                              </div>
                            )}

                            {editArticleThumbnailPreview && (
                              <div className="relative border rounded-lg p-2 bg-gray-50">
                                <img
                                  src={editArticleThumbnailPreview}
                                  alt="Thumbnail preview"
                                  className="w-full h-48 object-cover rounded"
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute top-4 right-4 h-8 w-8"
                                  onClick={() =>
                                    handleRemoveImage(
                                      (value) => setEditArticleForm({ ...editArticleForm, thumbnail: value }),
                                      setEditArticleThumbnailPreview
                                    )
                                  }
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </div>
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
                            onClick={() => handleDeleteArticle(article.id, article.title)}
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
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Malayalam Copywriting Tab */}
          <TabsContent value="malayalamCopywriting" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Add Malayalam Copywriting Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Malayalam Copywriting Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleMalayalamCopywritingSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="malayalam-copywriting-thumbnail">Thumbnail Path</Label>
                      <Input
                        id="malayalam-copywriting-thumbnail"
                        value={malayalamCopywritingForm.thumbnail}
                        onChange={(e) =>
                          setMalayalamCopywritingForm({ ...malayalamCopywritingForm, thumbnail: e.target.value })
                        }
                        required
                        placeholder="e.g., /malayalam-copywriting/mc1.png"
                      />
                    </div>
                    <div>
                      <Label htmlFor="malayalam-copywriting-link">Link</Label>
                      <Input
                        id="malayalam-copywriting-link"
                        type="url"
                        value={malayalamCopywritingForm.link}
                        onChange={(e) => setMalayalamCopywritingForm({ ...malayalamCopywritingForm, link: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="malayalam-copywriting-description">Description</Label>
                      <Textarea
                        id="malayalam-copywriting-description"
                        value={malayalamCopywritingForm.description}
                        onChange={(e) =>
                          setMalayalamCopywritingForm({ ...malayalamCopywritingForm, description: e.target.value })
                        }
                        required
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-emerald-600 to-indigo-600 text-white hover:from-emerald-700 hover:to-indigo-700"
                    >
                      {loading ? 'Adding...' : 'Add Malayalam Work'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Malayalam Copywriting Works List */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Existing Works{' '}
                    <Badge variant="secondary" className="ml-2">
                      {malayalamCopywritingWorks.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-[600px] overflow-y-auto">
                    {malayalamCopywritingWorks.map((work) => (
                      <div key={work.id} className="border rounded-lg p-4 hover:bg-gray-50">
                        {editingMalayalamCopywritingId === work.id ? (
                          <form onSubmit={handleUpdateMalayalamCopywriting} className="space-y-4">
                            <div>
                              <Label htmlFor="edit-malayalam-copywriting-thumbnail">Thumbnail Path</Label>
                              <Input
                                id="edit-malayalam-copywriting-thumbnail"
                                value={editMalayalamCopywritingForm.thumbnail}
                                onChange={(e) =>
                                  setEditMalayalamCopywritingForm({ ...editMalayalamCopywritingForm, thumbnail: e.target.value })
                                }
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="edit-malayalam-copywriting-link">Link</Label>
                              <Input
                                id="edit-malayalam-copywriting-link"
                                type="url"
                                value={editMalayalamCopywritingForm.link}
                                onChange={(e) =>
                                  setEditMalayalamCopywritingForm({ ...editMalayalamCopywritingForm, link: e.target.value })
                                }
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="edit-malayalam-copywriting-description">Description</Label>
                              <Textarea
                                id="edit-malayalam-copywriting-description"
                                value={editMalayalamCopywritingForm.description}
                                onChange={(e) =>
                                  setEditMalayalamCopywritingForm({ ...editMalayalamCopywritingForm, description: e.target.value })
                                }
                                required
                                rows={3}
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button
                                type="submit"
                                disabled={loading}
                                className="flex-1 bg-gradient-to-r from-emerald-600 to-indigo-600 text-white hover:from-emerald-700 hover:to-indigo-700"
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
                                  onClick={() => handleEditMalayalamCopywriting(work)}
                                  variant="outline"
                                  size="sm"
                                  className="flex-1"
                                >
                                  Edit
                                </Button>
                                <Button
                                  onClick={() => handleDeleteMalayalamCopywriting(work.id, work.description)}
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
                    {malayalamCopywritingWorks.length === 0 && (
                      <p className="text-gray-500 text-center py-8">No malayalam works yet. Add your first work!</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Copywriting Tab */}
          <TabsContent value="copywriting" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Add Copywriting Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Add New Copywriting Work</CardTitle>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              {/* Copywriting Works List */}
              <Card>
                <CardHeader>
                  <CardTitle>
                    Existing Works{' '}
                    <Badge variant="secondary" className="ml-2">
                      {copywritingWorks.length}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                              onClick={() => handleDeleteCopywriting(work.id, work.description)}
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
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this{' '}
                {itemToDelete?.type === 'article'
                  ? 'article'
                  : itemToDelete?.type === 'malayalamCopywriting'
                    ? 'malayalam copywriting work'
                    : 'copywriting work'}
                {itemToDelete?.title && (
                  <span className="block mt-2 font-medium text-foreground">
                    "{itemToDelete.title}"
                  </span>
                )}
                <span className="block mt-2">This action cannot be undone.</span>
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setDeleteDialogOpen(false);
                  setItemToDelete(null);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={confirmDelete}
                disabled={loading}
              >
                {loading ? 'Deleting...' : 'Delete'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

