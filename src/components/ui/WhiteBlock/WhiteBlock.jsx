import styles from './WhiteBlock.module.css'
const WhiteBlock = ({ children, className }) => {
  return (
    <div className={[styles.whiteBlock, className].join(' ')}>{children}</div>
  )
}

export default WhiteBlock
