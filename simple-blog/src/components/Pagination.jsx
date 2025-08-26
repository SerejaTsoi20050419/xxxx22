export default function Pagination({ total, currentPage, onPageChange }) {
  const totalPages = Math.ceil(total / 10);

  return (
    <div>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          disabled={i + 1 === currentPage}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}