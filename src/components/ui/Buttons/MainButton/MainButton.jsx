import styles from './MainButton.module.css'
const MainButton = ({ children }) => {
  return <button className={styles.mainButton}>{children}</button>
}

export default MainButton
