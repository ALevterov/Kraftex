import styles from './ServiceItem.module.css'
const ServiceItem = ({ icon, text, withBorder }) => {
  const classes = [styles.serviceItemInner, withBorder ? styles.border : '']
  return (
    <div className={styles.serviceItem}>
      <div className={classes.join(' ')}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.textWrapper}>{text}</div>
      </div>
    </div>
  )
}

export default ServiceItem
