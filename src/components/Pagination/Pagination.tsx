import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import style from "./style.module.scss";

interface PaginationProps {}

const Pagination: React.FC<PaginationProps> = () => {
  const { currentPage, setCurrentPage, searchCount } = useContext(AppContext);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(searchCount / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    const visiblePages = 3;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${i === currentPage ? style.active : ""} ${style.hover}`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  const renderEllipsis = () => {
    if (currentPage > 1 && currentPage < totalPages) {
      return <span className={style.ellipsis}></span>;
    }
    return null;
  };

  return (
    <div className={style.pagination}>
      {totalPages ? (
        <>
          <>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span>{"<"}</span>
            </button>
            {renderPageNumbers()}
            <button onClick={() => renderEllipsis()}>...</button>
            <button onClick={() => handlePageChange(totalPages)}>
              <span>{totalPages}</span>
            </button>
          </>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>{">"}</span>
          </button>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
