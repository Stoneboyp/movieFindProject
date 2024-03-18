import Profile from "./Profile/Profile";
import Search from "./Search/Search";
import logo from "/logo.jpg";
import style from "./style.module.scss";
import SearchInfo from "./SearchInfo/SearchInfo";

export const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <img className={style.logoContainer__logo} src={logo} alt="logo" />
      </div>
      <div className={style.searchContainer}>
        <Search />
      </div>
      <div className={style.profileContainer}>
        <Profile />
      </div>
      <div className={style.searchInfoContainer}>
        <SearchInfo />
      </div>
    </div>
  );
};
