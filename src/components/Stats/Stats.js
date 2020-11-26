import PropTypes from 'prop-types';

function Statistic(props) {
  const { label, percentage } = props;

  return (
    <li className="item">
      <span className="label">{label}</span>
      <span> </span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

export default Statistic;

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
