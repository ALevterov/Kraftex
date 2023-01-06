import { useRef } from 'react'
import styles from './TabBarItem.module.css'
const TabBarItem = ({ children, label, activeTab }) => {
  // if (activeTab !== label) return
  const classes = [styles.tabBarItem]
  const ref = useRef()
  if (activeTab === label) {
    classes.push(styles.active)
    setTimeout(() => {
      if (ref.current) ref.current.style.display = 'block'
    }, 1000)
  }
  if (activeTab !== label) {
    setTimeout(() => {
      if (ref.current) ref.current.style.display = 'none'
    }, 1000)
  }
  return (
    <div className={classes.join(' ')} ref={ref}>
      {children}
    </div>
  )
}

export default TabBarItem
