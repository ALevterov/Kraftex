import styles from './ButtonWithIcon.module.css'
const ButtonWithIcon = ({ text, icon, type }) => {
  return (
    <button className={styles.button} type={type}>
      <div className={styles.buttonInner}>
        <div>{text}</div>
        <div className={styles.icon}>{icon}</div>
      </div>
    </button>
  )
}

export default ButtonWithIcon
