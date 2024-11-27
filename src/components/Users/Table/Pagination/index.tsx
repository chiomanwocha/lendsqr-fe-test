import { ReactComponent as NavBtn } from "../../../../assets/icons/pagination-nav.svg";
import { PaginationProps } from "../../../../types";
import usePagination from "../../../../hooks/users/usePagination";
import "./pagination.scss";

const Pagination = ({ pagination, setPagination }: PaginationProps) => {
  
  const {
    getPaginationRange,
    totalPages,
    handlePageChange,
    handleLimitChange,
  } = usePagination(pagination, setPagination);


  return (
    <div className="pagination">
      <div className="pagination-info">
        <span>Showing</span>
        <select
          className="items-per-page"
          value={pagination.limit}
          onChange={(e) => handleLimitChange(e.target.value)}
        >
          {["10", "25", "50", "100"].map((limit) => (
            <option value={limit} key={limit}>
              {limit}
            </option>
          ))}
        </select>
        <span>out of {totalPages}</span>
      </div>
      <div className="pagination-controls">
        <button
          className="pagination-button prev"
          disabled={pagination.page === 1}
          onClick={() => handlePageChange(pagination.page - 1)}
        >
          <NavBtn />
        </button>
        {getPaginationRange(pagination.page, totalPages).map((page, index) => (
          <span
            key={`${page}-${index}`}
            className={`pagination-page ${
              pagination.page === page ? "active" : ""
            }`}
            role="button"
            onClick={() => handlePageChange(Number(page))}
          >
            {page}
          </span>
        ))}
        <button
          className="pagination-button"
          disabled={pagination.page === totalPages}
          onClick={() => handlePageChange(pagination.page + 1)}
        >
          <NavBtn />
        </button>
      </div>
      <div className="page-list">
        <span>Page</span>
        <select
          className="page"
          value={pagination.page}
          onChange={(e) => handlePageChange(Number(e.target.value))}
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
