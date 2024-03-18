import "./App.css";
import "./fonts/fonts.scss";
import { Header } from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { AppProvider } from "./Contexts/Context";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <AppProvider>
      <Header />
      <MovieList />
      <Pagination />
    </AppProvider>
  );
}

export default App;
