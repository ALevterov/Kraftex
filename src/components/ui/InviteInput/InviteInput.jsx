import { Field } from 'formik'
import styles from './InviteInput.module.css'
const InviteInput = ({ label, id, errors, touched, onChange, value }) => {
  const classes = [styles.inputWrapper]
  // console.log(errors)
  console.log(touched)
  if (touched && errors) {
    classes.push(styles.error)
  }
  return (
    <div className={classes.join(' ')}>
      <label htmlFor={id} className={styles.label}>
        {/* {errors && touched ? `${label.replace('*', '')}` : label}
        {errors && touched && (
          <span className={styles.labelError}>{errors}</span>
        )} */}
        {label}
      </label>
      <Field
        className={styles.input}
        type='text'
        name={id}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default InviteInput
