import styles from './TitledList.module.css'
const TitledList = ({ title, children }) => {
  return (
    <div className={styles.titledList}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.list}>{children}</ul>
    </div>
  )
}

export default TitledList
