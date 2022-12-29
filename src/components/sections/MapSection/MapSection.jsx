import MapWrapper from 'components/Map/MapWrapper/MapWrapper'
import styles from './MapSection.module.css'
import MapHat from 'components/icons/MapHat'
import MapContact from 'components/ui/MapContact/MapContact'
const MapSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.hatContainer}>
        <MapHat />
      </div>
      <div className={styles.cardContainer}>
        <MapContact />
      </div>
      <MapWrapper />
    </div>
  )
}

export default MapSection
