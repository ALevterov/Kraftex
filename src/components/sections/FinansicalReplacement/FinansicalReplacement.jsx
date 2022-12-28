import Container from 'components/ui/Container/Container'
import SectionTitle from 'components/ui/Text/SectionTitle'
import styles from './FinRep.module.css'
import Image from 'next/image'
import mapPicture from '../../../../public/assets/Map.png'
import DarkContainer from 'components/ui/Text/DarkContainer'
import AttentionIcon from 'components/icons/AttentionIcon'
import TitledList from 'components/ui/TitledList/TitledList'
import Center from 'components/ui/Center'
import MainButton from 'components/ui/Buttons/MainButton/MainButton'
import AdditionalText from 'components/ui/Text/AdditionallText'
const FinansicalReplacement = () => {
  return (
    <Container className='section bigMargin'>
      <SectionTitle text={'Финансовые перестановки'} colored={true} />
      <div className={styles.description}>
        Kraftex предлагает услуги перестановки активов{' '}
        <span className='active'>(Crypto, RUB, USD, EUR, AED, CNY)</span> в обе
        стороны между странами:{' '}
        <span className='active'>
          Россия, ОАЭ, Турция, Китай, страны Евросоюза и США.
        </span>{' '}
        Также имеются опции инкассации активов и заморозки полученного резерва
        на несколько дней в случае, если клиент желает забрать денежные средства
        в другой стране лично.
      </div>
      <div className={styles.mapWrapper}>
        <Image src={mapPicture.src} fill alt='Map' />
      </div>
      <div className={styles.wrapperBlock}>
        <div className={styles.financicalDarkContainer}>
          <DarkContainer>
            <AttentionIcon />{' '}
            <span> Международные финансовые перестановки </span> -
            трансграничное перемещение (в том числе инкассация) наличной
            денежной массы из одной страны в другую. Другими словами, это
            одномоментная передача клиентом активов в одном месте и получение
            своих средств в любом другом.
          </DarkContainer>
        </div>
        <div className={styles.titledListContainer}>
          <TitledList
            title={
              <>
                <span className='active'>Для кого эта услуга?</span> Для
                клиентов, желающих:
              </>
            }
          >
            <li>
              провести сделку по купле-продажи недвижимости или транспортных
              средств за границей;
            </li>
            <li>приобрести оптом товары для бизнеса за рубежом;</li>
            <li>
              передать деньги партнерам или родственникам в другой стране;
            </li>
            <li>сберечь свой капитал или имущество от волатильности;</li>
            <li>создать финансовую подушку.</li>
          </TitledList>
        </div>
      </div>
      <Center>
        <MainButton>Заказать перестановку</MainButton>
      </Center>
      <Center>
        <AdditionalText className={styles.additionalText}>
          Комиссии за оказание услуг по перестановке обсуждаются индивидуально и
          зависят от: направления, валюты и суммы перестановки. Более подробную
          информацию по услуге перестановки Вы можете получить у Вашего
          персонального менеджера.
        </AdditionalText>
      </Center>
    </Container>
  )
}

export default FinansicalReplacement
