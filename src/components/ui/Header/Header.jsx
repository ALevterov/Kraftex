import LogoIcon from 'components/icons/LogoIcon'
import HeaderRightIcon from 'components/icons/HeaderRightIcon'
import styles from './Header.module.css'
import Container from '../Container/Container'
const Header = () => {
  return (
    <Container className={styles.header}>
      <LogoIcon />
      <HeaderRightIcon />
    </Container>
  )
}

export default Header
