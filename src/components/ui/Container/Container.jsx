import styles from './Container.module.css'
const Container = ({ children, style, className }) => {
  const classes = className ? [styles.container, className] : [styles.container]
  return (
    <div className={classes.join(' ')} style={{ ...style }}>
      {children}
    </div>
  )
}

export default Container
