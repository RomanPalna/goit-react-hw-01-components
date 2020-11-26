import PropTypes from 'prop-types';

function Statistic(props) {
  const { label, percentage, id } = props;

  return (
    <li className="item" key={id}>
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
