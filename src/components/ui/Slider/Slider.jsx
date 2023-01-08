import Carousel from 'react-bootstrap/Carousel'
import styles from '../TabBar/TabBarItem/TabBarItem.module.css'
import navStyles from '../TabBar/TabBarNav/TabBarNav.module.css'
import sliderStyles from './Slider.module.css'
import { useState } from 'react'
import { useEffect } from 'react'

const checkButtons = (prevButton, nextButton, index) => {
  console.log(index)
  console.log(prevButton)
  console.log(nextButton)
  if (index === 2) {
    nextButton.classList.add('hidden')
  }
  if (index === 0) {
    prevButton.classList.add('hidden')
  }
  if (index < 2) {
    nextButton.classList.remove('hidden')
  }
  if (index > 0) {
    prevButton.classList.remove('hidden')
  }
}

const Slider = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    const prevButton = document.querySelector('.carousel-control-prev')
    const nextButton = document.querySelector('.carousel-control-next')
    checkButtons(prevButton, nextButton, selectedIndex)
  }
  useEffect(() => {
    const prevButton = document.querySelector('.carousel-control-prev')
    prevButton.addEventListener('click', checkButtons)
    prevButton.classList.add('hidden')
  }, [])

  const toggleMore = () => {
    const items = document.querySelectorAll('.slider-item-container')
    const currentItem = items[index]
    // console.log(currentItem.style.maxHeight)
    currentItem.classList.toggle('max')
    // if (currentItem.style.maxHeight === '350px') {
    //   console.log('hello!')
    //   currentItem.style.maxHeight = 'none'
    // } else {
    // 	currentItem.classList.add('max')
    //   currentItem.style.maxHeight = '350px'
    // }
  }

  return (
    <div className={sliderStyles.sliderWrapper}>
      <Carousel
        className='slider'
        interval={null}
        indicators={false}
        onSelect={handleSelect}
        nextIcon={
          <span aria-hidden='true' className={sliderStyles.nextIcon}>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.0441 7.22943C13.702 6.89038 13.1499 6.89284 12.8108 7.23493C12.4718 7.57702 12.4742 8.12919 12.8163 8.46824L14.4563 10.0936C15.1248 10.7562 15.5729 11.2022 15.8742 11.5773C15.888 11.5945 15.9013 11.6114 15.9142 11.6279L7.84884 11.6279C7.36719 11.6279 6.97674 12.0184 6.97674 12.5C6.97674 12.9816 7.36719 13.3721 7.84884 13.3721L15.9142 13.3721C15.9013 13.3886 15.888 13.4055 15.8742 13.4227C15.5729 13.7978 15.1248 14.2438 14.4563 14.9064L12.8163 16.5318C12.4742 16.8708 12.4718 17.423 12.8108 17.7651C13.1499 18.1072 13.702 18.1096 14.0441 17.7706L15.7199 16.1097C16.3433 15.4918 16.8633 14.9765 17.2341 14.5148C17.6229 14.0306 17.9187 13.5217 17.9978 12.9017C18.0148 12.7684 18.0233 12.6342 18.0233 12.5C18.0233 12.3658 18.0148 12.2316 17.9978 12.0983C17.9187 11.4783 17.6229 10.9694 17.2341 10.4852C16.8633 10.0235 16.3434 9.5082 15.7199 8.89033L14.0441 7.22943Z'
                fill='#A6F696'
                fill-opacity='0.861638'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM1.74419 12.5C1.74419 6.55973 6.55973 1.74419 12.5 1.74419C18.4403 1.74419 23.2558 6.55973 23.2558 12.5C23.2558 18.4403 18.4403 23.2558 12.5 23.2558C6.55973 23.2558 1.74419 18.4403 1.74419 12.5Z'
                fill='#A6F696'
                fill-opacity='0.861638'
              />
            </svg>
          </span>
        }
        prevIcon={
          <span aria-hidden='true' className={sliderStyles.prevIcon}>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M14.0441 7.22943C13.702 6.89038 13.1499 6.89284 12.8108 7.23493C12.4718 7.57702 12.4742 8.12919 12.8163 8.46824L14.4563 10.0936C15.1248 10.7562 15.5729 11.2022 15.8742 11.5773C15.888 11.5945 15.9013 11.6114 15.9142 11.6279L7.84884 11.6279C7.36719 11.6279 6.97674 12.0184 6.97674 12.5C6.97674 12.9816 7.36719 13.3721 7.84884 13.3721L15.9142 13.3721C15.9013 13.3886 15.888 13.4055 15.8742 13.4227C15.5729 13.7978 15.1248 14.2438 14.4563 14.9064L12.8163 16.5318C12.4742 16.8708 12.4718 17.423 12.8108 17.7651C13.1499 18.1072 13.702 18.1096 14.0441 17.7706L15.7199 16.1097C16.3433 15.4918 16.8633 14.9765 17.2341 14.5148C17.6229 14.0306 17.9187 13.5217 17.9978 12.9017C18.0148 12.7684 18.0233 12.6342 18.0233 12.5C18.0233 12.3658 18.0148 12.2316 17.9978 12.0983C17.9187 11.4783 17.6229 10.9694 17.2341 10.4852C16.8633 10.0235 16.3434 9.5082 15.7199 8.89033L14.0441 7.22943Z'
                fill='#A6F696'
                fill-opacity='0.861638'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0ZM1.74419 12.5C1.74419 6.55973 6.55973 1.74419 12.5 1.74419C18.4403 1.74419 23.2558 6.55973 23.2558 12.5C23.2558 18.4403 18.4403 23.2558 12.5 23.2558C6.55973 23.2558 1.74419 18.4403 1.74419 12.5Z'
                fill='#A6F696'
                fill-opacity='0.861638'
              />
            </svg>
          </span>
        }
      >
        <Carousel.Item>
          <div
            className={[
              sliderStyles.itemContainer,
              'slider-item-container',
            ].join(' ')}
          >
            <div className={navStyles.tabBarNav}>
              <button
                className={[navStyles.navItem, navStyles.active].join(' ')}
              >
                Наш подход
              </button>
            </div>
            <div className={styles.tabBarItemContainer}>
              <p>
                <span className='active'>Ваши финансовые цели и задачи</span> -
                стартовый этап нашего партнёрства, а их достижение — основной
                показатель совместного успеха.
              </p>
              <p>
                <span className='active'>Наша миссия:</span> «Полное выполнение
                поставленных задач с гарантией максимальной безопасности и
                личной ответственности».
              </p>
              <p>
                <span className='active'>Платежные решения Kraftex</span>{' '}
                позволяют нашим клиентам вести международную деятельность на
                финансовых рынках и эффективно управлять своим капиталом и
                денежными потоками благодаря:
              </p>
            </div>
            <div className={styles.tabBarListContainer}>
              <ul className={styles.tabBarListContainerItem}>
                <li>богатому опыту работы в сфере финансов;</li>
                <li>безупречной репутации;</li>
                <li>проверенным контрагентам и партнерам;</li>
                <li>широкому спектру услуг и направлений;</li>
                <li>качественному офисному и онлайн-обслуживанию;</li>
                <li>наличию защищенных операционных касс;</li>
              </ul>
              <ul className={styles.tabBarListContainerItem}>
                <li>собственной IT-инфраструктуре;</li>
                <li>
                  высокому уровню безопасности сделок и денежных переводов;
                </li>
                <li>опциям взаимодействия с множеством валют и криптовалют;</li>
                <li>множеству постоянных клиентов;</li>
                <li>большим подтвержденным резервам;</li>
              </ul>
              <ul className={styles.tabBarListContainerItem}>
                <li>выгодным курсам конвертации и обмена;</li>
                <li>низким комиссиям за операции и услуги;</li>
                <li>оперативному оформлению документов;</li>
                <li>высокой скорости обслуживания;</li>
                <li>качественной клиентской поддержке;</li>
              </ul>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={[sliderStyles.itemContainer].join(' ')}>
            <div className={navStyles.tabBarNav}>
              <button
                className={[navStyles.navItem, navStyles.active].join(' ')}
              >
                Наша команда
              </button>
            </div>
            <div className={styles.tabBarItemContainer}>
              <p>
                Почему нам можно доверять?{' '}
                <span className='active'>
                  В Kraftex работает опытная и компетентная команда
                </span>
                , готовая предложить индивидуальные решения и максимальный
                уровень комфорта в в выполнении как повседневных, так и самых
                неординарных задач.
              </p>

              <p>
                <span className='active'>Персональный менеджер Kraftex</span> —
                ваше доверенное лицо, с которым можно обсудить интересующие темы
                и актуальные финансовые вопросы.{' '}
                <span className='active'>К вашим услугам:</span> финансисты,
                юристы, банковские и налоговые консультанты, бухгалтеры,
                экономисты, крипто-эксперты, инвесторы, трейдеры, IT-специалисты
                и адвайзеры.
              </p>

              <p>
                Офисы, кассы и онлайн-сервисы Kraftex предназначены для
                возможности <span className='active'>безопасной</span>{' '}
                организации любых финансовых операций: временного хранения
                цифровых и фиатных финансовых активов, приема/выдачи платежей,
                инкассации между странами и городами.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={[sliderStyles.itemContainer].join(' ')}>
            <div className={navStyles.tabBarNav}>
              <button
                className={[navStyles.navItem, navStyles.active].join(' ')}
              >
                Наши услуги
              </button>
            </div>
            <div className={styles.tabBarItemContainer}>
              <div className={styles.tabBarListContainer}>
                <ul className={styles.tabBarListContainerItem}>
                  <li>
                    <span className='active'>Приватное обслуживание</span> -
                    решение повседневных и нестандартных финансовых задач;
                  </li>
                  <li>
                    <span className='active'>Финансовые продукты</span> -
                    уникальный подход к управлению капиталом и эксклюзивные
                    решения;
                  </li>
                  <li>
                    <span className='active'>Крипто—фиатный сервис</span> -
                    безграничные возможности для решения финансовых задач;
                  </li>
                </ul>
                <ul className={styles.tabBarListContainerItem}>
                  <li>
                    <span className='active'>Финансовые перестановки</span> -
                    одномоментные перемещения финансовых активов по всему миру;
                  </li>
                  <li>
                    <span className='active'>Обмен валют</span> - широкий спектр
                    направлений и выгодные котировки обмена валют и криптовалют;
                  </li>
                  <li>
                    <span className='active'>Логистические решения</span>-
                    сопровождение экспортно-импортных операций по всему миру
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.itemPar}>
              Специалисты Kraftex также готовы рассмотреть любого рода задачу в
              сфере финансового консалтинга и помочь Вам найти наиболее
              подходящее и эффективное решение.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
      {index === 0 && (
        <div className={sliderStyles.more}>
          <div className={sliderStyles.moreInner} onClick={toggleMore}>
            подробнее
            <span>
              <svg
                width='11'
                height='11'
                viewBox='0 0 11 11'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.88372 3.96512C5.88372 3.75319 5.71192 3.5814 5.5 3.5814C5.28808 3.5814 5.11628 3.75319 5.11628 3.96512V5.11628H3.96512C3.75319 5.11628 3.5814 5.28808 3.5814 5.5C3.5814 5.71192 3.75319 5.88372 3.96512 5.88372H5.11628V7.03488C5.11628 7.24681 5.28808 7.4186 5.5 7.4186C5.71192 7.4186 5.88372 7.24681 5.88372 7.03488V5.88372H7.03488C7.24681 5.88372 7.4186 5.71192 7.4186 5.5C7.4186 5.28808 7.24681 5.11628 7.03488 5.11628H5.88372V3.96512Z'
                  fill='#A6F696'
                  fill-opacity='0.861638'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0ZM0.767442 5.5C0.767442 2.88628 2.88628 0.767442 5.5 0.767442C8.11372 0.767442 10.2326 2.88628 10.2326 5.5C10.2326 8.11372 8.11372 10.2326 5.5 10.2326C2.88628 10.2326 0.767442 8.11372 0.767442 5.5Z'
                  fill='#A6F696'
                  fill-opacity='0.861638'
                />
              </svg>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Slider
