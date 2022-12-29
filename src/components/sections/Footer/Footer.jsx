import Container from 'components/ui/Container/Container'
import styles from './Footer.module.css'
const Footer = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.footerWrapper}>
        <div className={styles.left}>
          <div className={styles.politics}>Политика конфиденциальности</div>
          <div>Пользовательское соглашение</div>
        </div>
        <div>© Kraftex 2022-2023</div>
      </div>
    </Container>
  )
}

export default Footer
