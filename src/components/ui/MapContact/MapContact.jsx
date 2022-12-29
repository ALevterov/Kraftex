import TelegramIcon from 'components/icons/SocialMedia/TelegramIcon'
import styles from './MapContact.module.css'
import Link from 'next/link'
import InstagramIcon from 'components/icons/SocialMedia/InstagramIcon'
import FacebookIcon from 'components/icons/SocialMedia/FacebookIcon'
const MapContact = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBlock}>
        <div className={styles.blockTitle}>Адрес</div>
        <div className={styles.blockText}>
          Москва, ММДЦ «Москва-Сити», Пресненская набережная, д. 12 (Башня
          Федерация)
        </div>
      </div>
      <div className={styles.cardBlock}>
        <div className={styles.blockTitle}>Контакты</div>
        <div className={styles.splitText}>
          <div>e-mail: mail@mail.ru</div>
          <div>+7 999 999-99-99</div>
        </div>
      </div>
      <div className={styles.socialMedia}>
        <Link href='https://web.telegram.org'>
          <TelegramIcon />
        </Link>
        <Link href='https://instagram.com/'>
          <InstagramIcon />
        </Link>
        <Link href='https://facebook.com'>
          <FacebookIcon />
        </Link>
      </div>
    </div>
  )
}

export default MapContact
