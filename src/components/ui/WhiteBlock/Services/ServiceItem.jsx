import styles from './ServiceItem.module.css'
const ServiceItem = ({ icon, text, withBorder, href, id }) => {
  const classes = [styles.serviceItemInner, withBorder ? styles.border : '']
  return (
    <a href={href} className={styles.serviceItem} id={id}>
      <div className={classes.join(' ')}>
        <div className={styles.iconWrapper}>{icon}</div>
        <div className={styles.textWrapper}>{text}</div>
      </div>
    </a>
  )
}

export default ServiceItem
