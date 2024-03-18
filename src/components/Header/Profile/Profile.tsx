import profile from "/profile.svg";
import styles from "./style.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={profile} className={styles.profile__img} alt="profile img" />
      <h4 className={styles.profile__name}>Your Name</h4>
    </div>
  );
};

export default Profile;
