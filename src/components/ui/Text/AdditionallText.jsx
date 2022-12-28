import styles from './AdditionalText.module.css'
const AdditionalText = ({ children, className }) => {
  const classes = [styles.additionalText, className]
  return <div className={classes.join(' ')}>{children}</div>
}

export default AdditionalText
