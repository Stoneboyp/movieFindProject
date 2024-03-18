import { useContext, useRef } from "react";
import styles from "./style.module.scss";
import search from "/search.svg";
import { AppContext } from "../../Context/Context";

const Search = () => {
  const timeOutRef = useRef<number | null>(null);

  const { setSearchValue } = useContext(AppContext);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      setSearchValue(event.target.value);
    }, 300);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.search__form}
        type="text"
        placeholder="text to me"
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
