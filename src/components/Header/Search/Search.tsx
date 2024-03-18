import { useContext, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import search from "/search.svg";
import { AppContext } from "../../../Contexts/Context";
import useDebounced from "../../../hooks/useDebounced";

const Search = () => {
  const timeOutRef = useRef<number | null>(null);

  const { searchValue, setSearchValue, setCurrentPage } =
    useContext(AppContext);
  const handleInputChange = useDebounced();
  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);
  return (
    <div className={styles.search}>
      <input
        className={`${styles.search__form} ${
          !searchValue && styles.search__form__notValue
        }`}
        type="text"
        placeholder="Find movie"
        onChange={handleInputChange}
        style={{
          backgroundImage: `url(${search})`,
          backgroundPosition: "right 12px top 50%",
          backgroundSize: "16px",
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  );
};

export default Search;
