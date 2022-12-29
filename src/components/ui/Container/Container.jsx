import styles from './Container.module.css'
const Container = ({ children, style, className, id }) => {
  const classes = className ? [styles.container, className] : [styles.container]
  return (
    <div id={id} className={classes.join(' ')} style={{ ...style }}>
      {children}
    </div>
  )
}

export default Container
