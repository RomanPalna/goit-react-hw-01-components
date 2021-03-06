import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile(props) {
  const { name, tag, location, avatar } = props;

  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={s.avatar}
          width="240"
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers: </span>
          <span className={s.quantity}>{props.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views: </span>
          <span className={s.quantity}>{props.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes: </span>
          <span className={s.quantity}>{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
