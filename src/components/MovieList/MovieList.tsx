import { useContext, useEffect, useState } from "react";
import Movie from "./Movie/Movie";
import style from "./style.module.scss";
import { AppContext } from "../Context/Context";
import { useGetMoviesSearch } from "../../services/movies";

const MovieList = () => {
  const { searchValue, setSearchCount, currentPage, setCurrentPage } =
    useContext(AppContext);

  const { data, isLoading, error } = useGetMoviesSearch({
    searchValue,
    currentPage,
  });

  useEffect(() => {
    if (data) {
      setSearchCount(data.totalResults);
    }
  }, [data, setSearchCount]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  if (data?.Response === "False") return <p>Movie not found</p>;
  if (isLoading) return <div className={style.loader}></div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className={style.movieList}>
      {data && data.Search && data.Search.length > 0
        ? data.Search.map((movie) => <Movie key={movie.imdbID} movie={movie} />)
        : ""}
    </div>
  );
};

export default MovieList;
