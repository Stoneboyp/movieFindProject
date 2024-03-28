import "./App.css";
import "./fonts/fonts.scss";
import { Header } from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
import { AppProvider } from "./Contexts/Context";

function App() {
  return (
    <AppProvider>
      <Header />
      <MovieList />
    </AppProvider>
  );
}

export default App;
