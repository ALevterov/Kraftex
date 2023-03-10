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
import WorldMapIcon from 'components/icons/WorldMapIcon'
import Plane1 from 'components/icons/Planes/plane1'
import Plane2 from 'components/icons/Planes/plane2'
import Plane3 from 'components/icons/Planes/plane3'
import Plane4 from 'components/icons/Planes/plane4'
import Plane5 from 'components/icons/Planes/plane5'
const FinansicalReplacement = () => {
  return (
    <Container className='section bigMargin' id={'financical-replacement'}>
      <SectionTitle text={'Финансовые перестановки'} colored={true} />
      <div className={styles.mobileWrapper}>
        <div className={styles.description}>
          Kraftex предлагает услуги перестановки активов{' '}
          <span className='active'>(Crypto, RUB, USD, EUR, AED, CNY)</span> в
          обе стороны между странами:{' '}
          <span className='active'>
            Россия, ОАЭ, Турция, Китай, страны Евросоюза и США.
          </span>{' '}
          Также имеются опции инкассации активов и заморозки полученного резерва
          на несколько дней в случае, если клиент желает забрать денежные
          средства в другой стране лично.
        </div>
        <div className={styles.mapWrapper}>
          <WorldMapIcon />
          <div className={styles.plane1}>
            <Plane1 />
          </div>
          <div className={styles.plane2}>
            <Plane2 />
          </div>
          <div className={styles.plane3}>
            <Plane3 />
          </div>
          <div className={styles.plane4}>
            <Plane4 />
          </div>
          <div className={styles.plane5}>
            <Plane5 />
          </div>
          <div className={styles.plane6}>
            <Plane4 />
          </div>
          <div className={styles.plane7}>
            <Plane4 />
          </div>
        </div>
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
