import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.user}>
        <img className={css.icon} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.tag}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span>Followers</span>
          <span className={css.value}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span className={css.value}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span className={css.value}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
