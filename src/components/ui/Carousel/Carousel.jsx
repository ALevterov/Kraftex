import NavigationIcon from 'components/icons/NavigationIcon.jsx'
import '../../../owl-carousel/owl.carousel.min.js'
import PrivelegeCard from '../Cards/PrivelegeCard/PricelegeCard.jsx'
import ManIcon from 'components/icons/ManIcon.jsx'
import ShieldIcon from 'components/icons/ShieldIcon.jsx'
import { useEffect } from 'react'
const Carousel = () => {
  useEffect(() => {
    let aboutUs = $('.owl-carousel')
    aboutUs.owlCarousel({
      items: 3,
      margin: 30,
      autoWidth: true,
      nav: false,
      loop: false,
      responsive: {
        0: {
          autoWidth: true,
          // items: 1,
        },
        768: {
          autoWidth: true,
          // items: 1,
        },
      },
    })
  }, [])
  return (
    <div className='owl-carousel owl-theme'>
      <PrivelegeCard
        description={
          'Поможет выбрать подходящую услугу, соответствующую Вашим потребностям, и подробно ответит на любые вопросы'
        }
        icon={<ManIcon />}
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
  )
}

export default Carousel
