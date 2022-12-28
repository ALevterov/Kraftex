import styles from './TabBarNav.module.css'
const TabBarNav = ({ children, onChangeActiveTab, activeTab }) => {
  const labels = children.map(child => child.props.label)

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
            onClick={() => onChangeActiveTab(label)}
          >
            {label}
          </button>
        ))}
      </div>
      {children}
    </>
  )
}

export default TabBarNav
