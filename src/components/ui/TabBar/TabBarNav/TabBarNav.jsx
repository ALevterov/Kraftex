import { useRef } from 'react'
import styles from './TabBarNav.module.css'
const TabBarNav = ({ children, onChangeActiveTab, activeTab }) => {
  const labels = children.map(child => child.props.label)

  const ref = useRef()

  const onTabClick = label => {
    if (ref.current && activeTab !== label) {
      // ref.current.style.maxHeight = '0'
      ref.current.style.marginBottom = '-20%'
      setTimeout(() => {
        // ref.current.style.maxHeight = '100%'
        ref.current.style.marginBottom = '0'
      }, 500)
    }
    onChangeActiveTab(label)
  }

  return (
    <>
      <div className={styles.tabBarNav}>
        {labels.map(label => (
          <button
            className={[
              styles.navItem,
              activeTab === label ? styles.active : '',
            ].join(' ')}
            key={label}
            onClick={() => onTabClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
      {/* {children} */}
      <div className={styles.itemWrapper} ref={ref}>
        {children}
      </div>
    </>
  )
}

export default TabBarNav
