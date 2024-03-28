import { useContext, useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import style from "./style.module.scss";
import { AppContext } from "../../Contexts/Context";
import { useGetMoviesSearch } from "../../services/movies";
import Pagination from "../Pagination/Pagination";

const MovieList = () => {
  const { searchValue, setSearchCount, currentPage } = useContext(AppContext);

  const { data, isLoading, error } = useGetMoviesSearch({
    searchValue,
    currentPage,
  });

  useEffect(() => {
    if (data?.totalResults) {
      setSearchCount(data.totalResults);
    }
  }, [data, setSearchCount]);

  if (data?.Response === "False") return <p>Movie not found</p>;
  if (isLoading) return <div className={style.loader}></div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <>
      <div className={style.movieList}>
        {data && data.Search && data.Search.length > 0
          ? data.Search.map((movie) => (
              <Movie key={movie.imdbID} movie={movie} />
            ))
          : ""}
      </div>
      <Pagination />
    </>
  );
};

export default MovieList;
