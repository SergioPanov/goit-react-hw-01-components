import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = props => {
  const { title, stats } = props;

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      {stats.length > 0 && (
        <ul className={css.statList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              style={{ backgroundColor: randomColor() }}
              className={css.statItem}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
