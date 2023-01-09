import styles from './PrivelegeCard.module.css'
const PrivelegeCard = ({ icon, children, description, style }) => {
  return (
    <div className={styles.card}>
      <div className={styles.topContent}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.middleContent}>{children}</div>
      </div>
      <div className={styles.bottomContent}>{description}</div>
    </div>
  )
}

export default PrivelegeCard
