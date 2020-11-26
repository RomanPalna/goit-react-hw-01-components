import PropTypes from 'prop-types';
import Stats from './Stats';

function StatsList({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {items.map(item => (
          <li key={item.id}>
            <Stats label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatsList;

StatsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};