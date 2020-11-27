import PropTypes from 'prop-types';
import Friends from './friends';
import s from './Friends.module.css';

function FriendsList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(friend => (
        <Friends
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendsList;

FriendsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
