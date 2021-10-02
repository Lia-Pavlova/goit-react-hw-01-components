import PropTypes from "prop-types";
import s from "../friendList/FriendList.module.css";
import "../../App";

const FriendList = ({ friends }) => {
  return (
    <div>
      <h2 className={s.title}>Task 3. List of Friends</h2>
      <ul className={s.friendList}>
        {friends.map((friend) => (
          <li className={s.item} key={friend.id}>
            <span
              className={s.status}
              style={{ backgroundColor: friend.isOnline ? "green" : "red" }}
            >
              {friend.isOnline}
            </span>
            <img className={s.avatar} src={friend.avatar} alt="" width="48" />
            <p className={s.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
