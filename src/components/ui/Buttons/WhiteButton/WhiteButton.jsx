import styles from './WhiteButton.module.css'
const WhiteButton = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}

export default WhiteButton
