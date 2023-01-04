import styles from './WhiteBlock.module.css'
const WhiteBlock = ({ children, className, id }) => {
  return (
    <div className={[styles.whiteBlock, className].join(' ')} id={id}>
      {children}
    </div>
  )
}

export default WhiteBlock
