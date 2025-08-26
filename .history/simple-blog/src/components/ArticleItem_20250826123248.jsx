import { Link } from 'react-router-dom';

export default function ArticleItem({ article }) {
  return (
    <div>
      <Link to={`/articles/${article.slug}`}>
        <h2>{article.title}</h2>
      </Link>
      <p>{article.description}</p>
    </div>
  );
}