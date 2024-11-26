import { ReactComponent as NavBtn } from "../../../../assets/icons/pagination-nav.svg";
import { PaginationProps } from "../../../../types";
import usePagination from "../../../../hooks/users/usePagination";
import "./pagination.scss";

const Pagination = ({
  currentPage,
  totalPages,
  itemsPerPage,
}: PaginationProps) => {
  const { navigate, getPaginationRange } = usePagination();

  const handlePageChange = (page: number) => {
    navigate(`/users?page=${page}`);
  };

  const handleItemsPerPageChange = (value: string) => {
    navigate(`/users?page=1&per_page=${value}`);
  };

  return (
    <div className="pagination">
      <div className="pagination-info">
        <span>Showing</span>
        <select
          className="items-per-page"
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPageChange(e.target.value)}
        >
          {["10", "25", "50", "100"].map((page) => (
            <option value={page} key={page}>
              {page}
            </option>
          ))}
        </select>
        <span>out of {totalPages}</span>
      </div>
      <div className="pagination-controls">
        <button
          className="pagination-button prev"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <NavBtn />
        </button>
        {getPaginationRange(currentPage, totalPages).map((page, index) => (
          <span
            key={`${page}-${index}`}
            className={`pagination-page ${
              currentPage === page ? "active" : ""
            }`}
            role="button"
            onClick={() => handlePageChange(Number(page))}
          >
            {page}
          </span>
        ))}
        <button
          className="pagination-button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <NavBtn />
        </button>
      </div>
      <div className="page-list">
        <span>Page</span>
        <select
          className="page"
          value={currentPage}
          onChange={(e) =>
            navigate(`/users?page=${e.target.value}&per_page=${itemsPerPage}`)
          }
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <option value={page} key={page}>
              {page}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
