import "./pagination.scss";
import { ReactComponent as NavBtn } from "../../../../assets/icons/pagination-nav.svg";
import { useNavigate } from "react-router";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
}: PaginationProps) => {
  const navigate = useNavigate();
  const getPaginationRange = (currentPage: number, totalPages: number) => {
    const range = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, "...", totalPages - 1, totalPages);
      } else if (currentPage > totalPages - 3) {
        range.push(1, 2, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, 2, "...", currentPage, "...", totalPages - 1, totalPages);
      }
    }
    return range;
  };

  return (
    <div className="pagination">
      <div className="pagination-info">
        <span>Showing</span>
        <select
          className="items-per-page"
          value={itemsPerPage}
          onChange={(e) => {
            // onPageChange(1, parseInt(e.target.value, 10));
            navigate(`/users?page=1&per_page=${e.target.value}`);
          }}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span>out of {totalPages}</span>
      </div>
      <div className="pagination-controls">
        <button
          className="pagination-button prev"
          disabled={currentPage === 1}
          onClick={() => {
            navigate(`/users?page=${currentPage - 1}`);
          }}
        >
          <NavBtn />
        </button>
        {getPaginationRange(currentPage, totalPages).map((page, index) => (
          <span
            className={`pagination-page ${
              currentPage === page ? "active" : ""
            }`}
            role="button"
            key={`${page}${index}`}
            onClick={() => {
              navigate(`/users?page=${page}`);
            }}
          >
            {page}
          </span>
        ))}
        <button
          className="pagination-button"
          disabled={currentPage === totalPages}
          onClick={() => {
            navigate(`/users?page=${currentPage + 1}`);
          }}
        >
          <NavBtn />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
