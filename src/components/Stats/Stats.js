import PropTypes from 'prop-types';
import s from './Stats.module.css';

function Statistic(props) {
  const { label, percentage, id } = props;

  return (
    <li className={s.item} key={id} style={{ backgroundColor: rundomColor() }}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
}

export default Statistic;

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

//Indian code
function rundomColor() {
  const color =
    '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);

  return color;
}
