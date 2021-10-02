import PropTypes from "prop-types"; // абсолютные импорты (все библиотеки) стоят выше, чем относительные (мои)
import s from "../socialProfile/Profile.module.css";
import "../../App";
import defaultImage from "../socialProfile/defaultImage.webp";

const Profile = ({
  name,
  tag,
  location,
  avatar = defaultImage,
  followers,
  views,
  likes,
}) => {
  return (
    <div>
      <h2 className={s.title}>Task 1. Social Profile</h2>
      <div className={s.frame}>
        <div className={s.profile}>
          <div className={s.description}>
            <div className={s.image}>
              <img
                src={avatar}
                alt="Аватар пользователя"
                className={s.avatar}
              />
            </div>
            <p className={s.name}>{name}</p>
            <p className={s.tag}>@{tag}</p>
            <p className={s.location}>{location}</p>
          </div>

          <ul className={s.stats}>
            <li>
              <span className={s.quantity}>{followers}</span>
              <span className={s.label}>Followers</span>
            </li>
            <li>
              <span className={s.quantity}>{views}</span>
              <span className={s.label}>Views</span>
            </li>
            <li>
              <span className={s.quantity}>{likes}</span>
              <span className={s.label}>Likes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
