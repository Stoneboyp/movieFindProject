import { useContext } from "react";
import { AppContext } from "../../Context/Context";
import style from "./style.module.scss";

const SearchInfo = () => {
  const { searchCount, searchValue } = useContext(AppContext);
  if (!searchCount) {
    return null;
  }
  return (
    <div className={style.searchInfo}>
      <h4 className={style.searchInfo__value}>
        You Searched for : <span>{searchValue}</span>
      </h4>
      <div className={style.searchInfo__count}>{searchCount} results</div>
    </div>
  );
};

export default SearchInfo;
