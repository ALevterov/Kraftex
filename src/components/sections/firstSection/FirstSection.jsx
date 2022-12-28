import bigPicture1920 from '../../../../public/assets/bigPicture1920.png'
import magicStick from '../../../../public/assets/magicStick.png'
import Image from 'next/image'
import Container from 'components/ui/Container/Container'
import styles from './FirstSection.module.css'
import KraftexIcon from 'components/icons/KraftexIcon'
import MainText from 'components/ui/Text/mainText'

const FirstSection = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Container
        className={[styles.firstSectionContainer, 'section'].join(' ')}
        style={{ position: 'relative' }}
      >
        <div className={styles.iconContainer}>
          <KraftexIcon />
        </div>
        <div className={styles.firstSectionContainer}>
          <div className={styles.firstSectionTextContainer}>
            <MainText />
            <div className={styles.rokfellerText}>Джон Рокфеллер</div>
            <div className={styles.stickContainer}>
              <Image src={magicStick.src} alt='stick' fill />
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={bigPicture1920.src}
              alt='Big Roll'
              fill
              sizes='(max-width: 1440px) 782px (max-width: 1920px) 985px'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FirstSection
