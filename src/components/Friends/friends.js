import PropTypes from 'prop-types';
import s from './Friends.module.css';

function Friends(props) {
  const { avatar, name, isOnline, id } = props;
  return (
    <li
      className={s.item}
      key={id}
      style={{ backgroundColor: isOnline ? 'green' : 'tomato' }}
    >
      <span className={s.status}>{isOnline ? 'online' : 'offline'}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default Friends;

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
