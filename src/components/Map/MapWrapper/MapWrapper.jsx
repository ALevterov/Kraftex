import { useEffect } from 'react'
import styles from './MapWrapper.module.css'
import { load } from '@2gis/mapgl'
import MarkerSvg from '../../../../public/assets/Marker.svg'
const MapWrapper = () => {
  useEffect(() => {
    let map
    load().then(mapglAPI => {
      map = new mapglAPI.Map('map-container', {
        center: [37.5366631, 55.7498627],
        zoom: 16.7,
        key: 'bfd8bbca-8abf-11ea-b033-5fa57aae2de7',
        // rotation: -3,
        pitch: 45,
      })
      const marker = new mapglAPI.Marker(map, {
        coordinates: [37.5366631, 55.7498627],
        icon: MarkerSvg.src,
      })
    })
    return () => map && map.destroy()
  }, [])
  return <div id='map-container' className={styles.mapWrapper}></div>
}

export default MapWrapper
