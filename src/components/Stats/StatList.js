import PropTypes from 'prop-types';
import Stats from './Stats';
import s from './Stats.module.css';

function Statistic({ items }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.stat}>
        {items.map(item => (
          <Stats
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

export default Statistic;

Statistic.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
