import { useContext, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import search from "/search.svg";
import { AppContext } from "../../../Contexts/Context";
import useDebounced from "../../../hooks/useDebounced";

const Search = () => {
  const { searchValue } = useContext(AppContext);
  const handleInputChange = useDebounced();

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
