import { useNavigate } from "react-router";

const usePagination = (
  pagination: { page: number; limit: number },
  setPagination: React.Dispatch<
    React.SetStateAction<{
      page: number;
      limit: number;
    }>
  >
) => {
  const navigate = useNavigate();

  const totalPages = Math.ceil(500 / pagination.limit);

  const getPaginationRange = (currentPage: number, totalPages: number) => {
    const range: (number | string)[] = [];

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

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

  const handleLimitChange = (newLimit: string) => {
    setPagination({ page: 1, limit: Number(newLimit) });
  };

  return {
    navigate,
    getPaginationRange,
    totalPages,
    handlePageChange,
    handleLimitChange,
  };
};

export default usePagination;
