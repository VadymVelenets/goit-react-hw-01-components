import styles from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
  return(
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}> {title}</h2>}
      <ul className={styles.statList}>
        {stats.map(data => {
          return (
            <li className={styles.item} key={data.id}>
              <span className={styles.label}>{data.label}</span>
              <span className={styles.percentage}>{data.percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  )
};