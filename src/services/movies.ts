import { useQuery, UseQueryOptions } from "react-query";
import axios from "axios";
import { MoviesResponseType } from "../types/movies";

interface useGetMoviesSearchType {
  searchValue: string;
  currentPage: number;
}

export const useGetMoviesSearch = ({
  searchValue,
  currentPage,
}: useGetMoviesSearchType) => {
  const url = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_OMDB_API_KEY
  }&s=${searchValue}&page=${currentPage}`;

  const options: UseQueryOptions<MoviesResponseType> = {
    enabled: !!searchValue,
  };

  return useQuery<MoviesResponseType>(
    ["movies", searchValue, currentPage],
    async () => {
      const response = await axios.get<MoviesResponseType>(url);
      return response.data;
    },
    options
  );
};
