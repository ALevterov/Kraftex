import styles from './TabBarItem.module.css'
const TabBarItem = ({ children, label, activeTab }) => {
  if (activeTab !== label) return
  return <div className={styles.tabBarItem}>{children}</div>
}

export default TabBarItem
