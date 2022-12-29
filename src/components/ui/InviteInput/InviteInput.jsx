import styles from './InviteInput.module.css'
const InviteInput = ({ label, id }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input className={styles.input} type='text' id={id} />
    </div>
  )
}

export default InviteInput
