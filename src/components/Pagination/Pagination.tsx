import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import styles from "./style.module.scss";

const Pagination = () => {
  const { currentPage, setCurrentPage, searchCount } = useContext(AppContext);
  const itemsPerPage = 10;
  const totalPages = searchCount ? Math.ceil(searchCount / itemsPerPage) : 0;
  if (!totalPages) {
    return null;
  }
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
          className={`${i === currentPage ? styles.active : ""} ${
            styles.hover
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  const renderStartRange = () => {
    if (currentPage > 3) {
      return (
        <>
          <button onClick={() => handlePageChange(1)}>1</button>
          <button className={styles.ellipsis}>...</button>
        </>
      );
    }
    return null;
  };

  const renderEndRange = () => {
    if (currentPage < totalPages - 2) {
      return (
        <>
          <button className={styles.ellipsis}>...</button>
          <button onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span>{"<"}</span>
      </button>
      {renderStartRange()}
      {renderPageNumbers()}
      {renderEndRange()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>{">"}</span>
      </button>
    </div>
  );
};

export default Pagination;
