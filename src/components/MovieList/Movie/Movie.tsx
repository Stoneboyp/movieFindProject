import { MovieType } from "../../../types/movies";
import style from "./style.module.scss";
import placeholder from "/placeholder.jpg";

const Movie = ({ movie }: { movie: MovieType }) => {
  return (
    <div className={style.movie}>
      <div className={style.movie__poster}>
        <img
          className={style.movie__poster__img}
          src={movie.Poster !== "N/A" ? movie.Poster : placeholder}
          alt=""
        />
      </div>
      <div className={style.info}>
        <div className={style.info__name}>Name: {movie.Title}</div>
        <div className={style.info__year}>Year: {movie.Year}</div>
        <div className={style.info__id}>imdbID: {movie.imdbID}</div>
        <div className={style.info__type}>Type: {movie.Type}</div>
      </div>
    </div>
  );
};

export default Movie;
