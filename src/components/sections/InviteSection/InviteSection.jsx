import Center from 'components/ui/Center'
import Container from 'components/ui/Container/Container'
import SectionTitle from 'components/ui/Text/SectionTitle'
import styles from './InviteSection.module.css'
import Image from 'next/image'
import InviteForm from 'components/business/InviteForm/InviteForm'
import SafeImage from '../../../../public/assets/Safe.png'
const InviteSection = () => {
  return (
    <Container className={styles.container} id='invite'>
      <Center>
        <SectionTitle
          text={'Стать клиентом Kraftex'}
          colored={true}
          className={styles.title}
        />
      </Center>
      <div className={styles.itemsContainer}>
        <div className={styles.imageWrapper}>
          <Image src={SafeImage.src} fill alt='safe' />
        </div>
        <div className={styles.formWrapper}>
          <InviteForm />
        </div>
      </div>
    </Container>
  )
}

export default InviteSection
