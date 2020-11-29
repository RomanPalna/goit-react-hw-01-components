import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './Friends.module.css';

function FriendsList({ items }) {
  return (
    <ul className={s.friendList}>
      {items.map(friend => (
        <FriendListItem
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
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
