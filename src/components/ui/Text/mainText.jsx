import styles from './MainText.module.css'
const MainText = () => {
  return (
    <div className={styles.mainText}>
      <p>“Ваше благополучие зависит</p>
      <p className={styles.bottomText}>от ваших собственных решений”</p>
    </div>
  )
}

export default MainText
