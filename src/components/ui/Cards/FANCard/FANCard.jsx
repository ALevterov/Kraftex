import styles from './FANCard.module.css'
const FANCard = ({ rightClass = '', leftClass = '', children, text }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={[styles.left, leftClass].join(' ')}>{text}</div>
      <div className={[styles.right, rightClass].join(' ')}>{children}</div>
    </div>
  )
}

export default FANCard
