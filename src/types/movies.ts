export interface MovieType {
  Title: string;
  Year: number;
  imdbID: number;
  Type: string;
  Poster: string;
}
export interface MoviesResponseType {
  Response: "True" | "False";
  Search: MovieType[];
  totalResults: number;
}
