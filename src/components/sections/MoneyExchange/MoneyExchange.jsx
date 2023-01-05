import Container from 'components/ui/Container/Container'
import SectionTitle from 'components/ui/Text/SectionTitle'
import styles from './MoneyExchange.module.css'
import Center from 'components/ui/Center'
import Image from 'next/image'
import DarkContainer from 'components/ui/Text/DarkContainer'
import AttentionIcon from 'components/icons/AttentionIcon'
import TitledList from 'components/ui/TitledList/TitledList'
import MainButton from 'components/ui/Buttons/MainButton/MainButton'
import AdditionalText from 'components/ui/Text/AdditionallText'
import Script from 'next/script'
import { useEffect } from 'react'
// import CoinImage from '../../../../public/assets/Coin.png'
import Bitcoin from '../../../../public/assets/Bitcoin.png'
import Etherium from '../../../../public/assets/Etherium.png'
import 'twenty/jquery.event.move.js'
import 'twenty/jquery.twentytwenty.js'
const MoneyExchange = ({ image1, image2 }) => {
  useEffect(() => {
    $(function () {
      $('.twentytwenty').twentytwenty({
        no_overlay: true,
        move_with_handle_only: false,
      })
    })
    const dividers = document.querySelectorAll('.twentytwenty-handle')
    const leftImage = document.querySelector('.twentytwenty-before')
    const rightImage = document.querySelector('.twentytwenty-after')

    const removeListeners = () => {
      dividers.forEach(d => d.classList.remove('animated'))
      leftImage.classList.remove('animated')
      rightImage.classList.remove('animated')
    }
    const twentyContainer = document.querySelector(
      '.twentytwenty.twentytwenty-container'
    )
    twentyContainer.addEventListener('click', removeListeners)
    dividers.forEach(d => {
      d.classList.add('animated')
      leftImage.classList.add('animated')
      rightImage.classList.add('animated')
      // d.addEventListener('click', removeListeners)
    })
  }, [])
  return (
    <Container className={'section bigMargin'} id={'money-exchange'}>
      <SectionTitle
        text={'Обмен валют'}
        className={styles.moneyTitle}
        colored={true}
      />
      <Center>
        <div className={styles.imageContainer}>
          <div className='twentytwenty'>
            <Image src={image1.src} width={320} height={320} alt='' />
            <Image src={image2.src} width={320} height={320} alt='' />
          </div>
        </div>
      </Center>
      <div className={styles.mainText}>
        Kraftex предлагает услуги онлайн- и оффлайн-обмена валют{' '}
        <span className='active'>
          (RUB, USD, EUR, USDT, BTC, ETH и др. криптовалют)
        </span>{' '}
        в различных направлениях.{' '}
        <span>
          Документов при осуществлении сделок по обмену не потребуются. Kraftex
          гарантирует безопасность, конфиденциальность и полное соблюдение
          коммерческой тайны.
        </span>
      </div>
      <div className={styles.itemWrapper}>
        <div className={styles.darkContainerWrapper}>
          <DarkContainer>
            <AttentionIcon /> <span>Обмен валюты / криптовалюты</span> - это
            операция по наличному или безналичному обмену валют и криптовалют в
            соответствии с установленным курсом, производящаяся онлайн или в
            специализированном пункте подразделения компании Kraftex.
          </DarkContainer>
        </div>
        <div className={styles.titledListWrapper}>
          <TitledList
            title={
              <>
                <span className='active'>Для кого эта услуга?</span> Для
                клиентов, которые:
              </>
            }
          >
            <li>переводят денежные средства за границу;</li>
            <li>получают расчет в иностранной валюте или криптовалюте;</li>
            <li>ведут инвестиционную деятельность;</li>
            <li>занимаются арбитражной торговлей;</li>
            <li>занимаются биржевой торговлей.</li>
          </TitledList>
        </div>
      </div>
      <Center>
        <MainButton>Заказать обмен валют</MainButton>
      </Center>
      <Center>
        <AdditionalText className={styles.additionalText}>
          Более подробную информацию по услуге обмена валют,
          <br /> а также актуальный курс обмена Вы можете получить у Вашего
          персонального менеджера.
        </AdditionalText>
      </Center>
    </Container>
  )
}

export default MoneyExchange
