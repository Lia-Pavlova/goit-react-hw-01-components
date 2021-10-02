import PropTypes from "prop-types";
import s from "../statistics/Statistics.module.css";
import "../../App";

const Statistics = ({ title = "Upload stats", stats }) => {
  return (
    <div>
      <h2 className={s.title}>Task 2. Statistics</h2>
      <section className={s.statistics}>
        {title && <h3 className={s.title}>{title}</h3>}

        <ul className={s.statList}>
          {stats.map((element) => (
            <li className={s.item} key={element.id}>
              <span className={s.label}>{element.label}</span>
              <span className={s.percentage}>{element.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
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
  ),
};

export default Statistics;
