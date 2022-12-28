import Center from 'components/ui/Center'
import Container from 'components/ui/Container/Container'
import SectionTitle from 'components/ui/Text/SectionTitle'
import styles from './ItProducts.module.css'
import WhiteBlock from 'components/ui/WhiteBlock/WhiteBlock'
import CashWalletIcon from 'components/icons/KraftexProducts/CashWalletIcon'
import WhiteButton from 'components/ui/Buttons/WhiteButton/WhiteButton'
import TgBotIcon from 'components/icons/KraftexProducts/TgBotIcon'
const ItProducts = () => {
  return (
    <Container className={'section bigMargin'}>
      <Center>
        <SectionTitle
          text={'IT-продукты Kraftex'}
          colored={true}
          className={styles.title}
        />
      </Center>
      <WhiteBlock className={styles.whiteBlock}>
        <div className={styles.text1}>Обменный пункт Cashwallet</div>
        <div>
          <CashWalletIcon />
        </div>
        <div className={styles.text2}>основан в 2017 г.</div>
        <WhiteButton>Перейти</WhiteButton>
      </WhiteBlock>
      <WhiteBlock className={styles.whiteBlock}>
        <div className={styles.text1}>Kraftex Telegram Bot</div>
        <div>
          <TgBotIcon />
        </div>
        <div className={styles.text2}>
          удобный доступ к услугам Kraftex
          <br /> из любой точки земного шара
        </div>
        <WhiteButton>Перейти</WhiteButton>
      </WhiteBlock>
    </Container>
  )
}

export default ItProducts