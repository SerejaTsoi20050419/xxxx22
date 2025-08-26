import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleBySlug } from '../api';
import ReactMarkdown from 'react-markdown';

export default function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchArticleBySlug(slug);
        setArticle(data);
      } catch (err) {
        setError('Failed to load article.');
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [slug]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return null;

  return (
    <div>
      <h1>{article.title}</h1>
      <p>By {article.author.username}</p>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </div>
  );
}