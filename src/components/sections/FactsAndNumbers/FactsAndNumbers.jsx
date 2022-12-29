import BitcoinIcon from 'components/icons/FAN/BitcoinIcon'
import ConsultantIcon from 'components/icons/FAN/ConsultantIcon'
import GlobalNetworkIcon from 'components/icons/FAN/GlobalNetworkIcon'
import TeamIcon from 'components/icons/FAN/TeamIcon'
import TeamWorkIcon from 'components/icons/FAN/TeamWorkIcon'
import TechnologyIcon from 'components/icons/FAN/TechnologyIcon'
import FANCard from 'components/ui/Cards/FANCard/FANCard'
import FANIconContainer from 'components/ui/Cards/FANCard/FANIconContainer'
import Center from 'components/ui/Center'
import Container from 'components/ui/Container/Container'
import SectionTitle from 'components/ui/Text/SectionTitle'
import styles from './FAN.module.css'

const FactsAndNumbers = () => {
  return (
    <Container className={'section bigMargin'}>
      <Center>
        <SectionTitle text={'Факты и цифры'} className={styles.sectionTitle} />
      </Center>
      <div className={styles.cardsContainer}>
        <FANCard
          text={'Опыт управления финансами'}
          rightClass={styles.leftColumn}
        >
          <div className={styles.cardRight}>&gt; 15 лет</div>
          <FANIconContainer className={styles.technologyIcon}>
            <TechnologyIcon />
          </FANIconContainer>
        </FANCard>
        <FANCard
          text={'Средний стаж работы сотрудников'}
          rightClass={styles.rightColumn}
        >
          <div className={styles.cardRight}>~ 5 лет</div>
          <FANIconContainer className={styles.consultantIcon}>
            <ConsultantIcon />
          </FANIconContainer>
        </FANCard>
        <FANCard text={'На рынке криптовалют'} rightClass={styles.leftColumn}>
          <div className={styles.cardRight}>с 2013 года</div>
          <FANIconContainer className={styles.bitcoinIcon}>
            <BitcoinIcon />
          </FANIconContainer>
        </FANCard>
        <FANCard text={'Численность команды'} rightClass={styles.rightColumn}>
          <div className={styles.cardRight}>50 человек</div>
          <FANIconContainer className={styles.teamIcon}>
            <TeamIcon />
          </FANIconContainer>
        </FANCard>
        <FANCard text={'Kraftex присутствует'} rightClass={styles.leftColumn}>
          <div className={styles.cardRight}>в 15 странах</div>
          <FANIconContainer className={styles.globalNetworkIcon}>
            <GlobalNetworkIcon />
          </FANIconContainer>
        </FANCard>
        <FANCard
          text={'Клиентов по всему миру'}
          rightClass={styles.rightColumn}
        >
          <div className={styles.cardRight}>&gt; 500</div>
          <FANIconContainer className={styles.teamWorkIcon}>
            <TeamWorkIcon />
          </FANIconContainer>
        </FANCard>
      </div>
    </Container>
  )
}

export default FactsAndNumbers
