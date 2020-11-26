import PropTypes from 'prop-types';
import Friends from './friends';

function FriendsList({ items }) {
  return (
    <ul className="friend-list">
      {items.map(friend => (
        <li key={friend.id}>
          <Friends
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
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
