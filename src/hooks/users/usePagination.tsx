import { useNavigate } from "react-router";

const usePagination = () => {
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
  return { navigate, getPaginationRange };
};

export default usePagination;
