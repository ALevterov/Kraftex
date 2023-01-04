import styles from './SectionTitle.module.css'
const SectionTitle = ({ text, className, colored }) => {
  const classes = [styles.titleContainer, className, colored ? 'colored' : '']
  return (
    <div className={classes.join(' ')}>
      <h2 className={styles.sectionTitle}>{text}</h2>
      {/* <div
        className='colored'
        style={{ width: '100px', height: '100px' }}
      ></div> */}
    </div>
  )
}

export default SectionTitle
