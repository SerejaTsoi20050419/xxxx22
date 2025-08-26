import { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleItem from '../components/ArticleItem';
import Pagination from '../components/Pagination';

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [articlesCount, setArticlesCount] = useState(0);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await fetchArticles(page);
        setArticles(data.articles);
        setArticlesCount(data.articlesCount);
      } catch (err) {
        setError('Failed to load articles.');
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, [page]);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {articles.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
      <Pagination total={articlesCount} currentPage={page} onPageChange={setPage} />
    </div>
  );
}