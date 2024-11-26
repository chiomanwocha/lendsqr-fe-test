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

  return (
    <div className="pagination">
      <div className="pagination-info">
        <span>Showing</span>
        <select
          className="items-per-page"
          value={itemsPerPage}
          onChange={(e) => {
            navigate(`/users?page=1&per_page=${e.target.value}`);
          }}
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
