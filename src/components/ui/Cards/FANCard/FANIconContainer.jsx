import styles from './FANIconContainer.module.css'
const FANIconContainer = ({ children, className = '' }) => {
  return (
    <div className={[styles.container, className].join(' ')}>{children}</div>
  )
}

export default FANIconContainer
