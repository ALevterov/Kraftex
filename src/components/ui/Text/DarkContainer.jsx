import styles from './DarkContainer.module.css'
const DarkContainer = ({ children }) => {
  return <div className={styles.darkContainer}>{children}</div>
}

export default DarkContainer
