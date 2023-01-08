import Center from 'components/ui/Center'
import Container from 'components/ui/Container/Container'
import SectionTitle from 'components/ui/Text/SectionTitle'
import styles from './Priveleges.module.css'
import PrivelegeCard from 'components/ui/Cards/PrivelegeCard/PricelegeCard'
import ManIcon from 'components/icons/ManIcon'
import NavigationIcon from 'components/icons/NavigationIcon'
import ShieldIcon from 'components/icons/ShieldIcon'
import Carousel from 'components/ui/Carousel/Carousel'
const Priveleges = () => {
  return (
    <Container className='section mediumMargin' id='priveleges'>
      <Center>
        <SectionTitle text={'Привилегии'} className={styles.sectionTitle} />
      </Center>
      <div className={styles.cardContainer}>
        <PrivelegeCard
          description={
            'Поможет выбрать подходящую услугу, соответствующую Вашим потребностям, и подробно ответит на любые вопросы'
          }
          icon={<ManIcon style={{ width: '38px', height: '50px' }} />}
          style={{ transform: 'scaleX(0.79) scaleY(0.7936)' }}
        >
          <span>Персональный менеджер</span>
          <br />
          Доступен 24/7
        </PrivelegeCard>
        <PrivelegeCard
          icon={<NavigationIcon />}
          description={
            'Офис в центре Москвы и выделенные зоны в столицах и других крупных городах Азии, Европы, Среднего Востока и Северной Америки'
          }
        >
          <span>
            Отдельный офис и зоны обслуживания в каждой стране присутствия
          </span>
          <br />
          Ничего не отвлечет от сделки
        </PrivelegeCard>
        <PrivelegeCard
          icon={<ShieldIcon />}
          description={
            'Мы гарантируем, что Ваши активы будут в сохранности и достигнут пункта своего назначения несмотря на любые угрозы, санкции и ограничения'
          }
        >
          <span>Гарантии безопасности</span>
          <br />
          100% успешных сделок
        </PrivelegeCard>
      </div>
      <Carousel />
    </Container>
  )
}

export default Priveleges
