import { useEffect } from 'react'
import Script from 'next/script'
import Container from '../Container/Container'
import FirstSection from 'components/sections/firstSection/FirstSection'
import LogoIcon from 'components/icons/LogoIcon'
import Link from 'next/link'
import TelegramIcon from 'components/icons/SocialMedia/TelegramIcon'
import InstagramIcon from 'components/icons/SocialMedia/InstagramIcon'
import FacebookIcon from 'components/icons/SocialMedia/FacebookIcon'
import styles from './Menu.module.css'
const Menu = () => {
  useEffect(() => {
    //OPEN TRIGGER
    var openTrigger = $('.menu-trigger')

    var openTriggerTop = openTrigger.find('.menu-trigger-bar.top')
    var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle')
    var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom')

    //CLOSE TRIGGER
    var closeTrigger = $('.close-trigger')
    var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left')
    var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right')

    //LOGO
    var logo = $('.logo')

    //MENU
    let hiddenBlock = document.querySelector('.hidden-when-menu')
    // let menuContainerInner = document.querySelector('.menu-container-inner')
    let menuTrigger = document.querySelector('.menu-trigger')
    let menuCloseTrigger = document.querySelector('.close-trigger')
    // console.log(menuContainerInner)

    const togglePage = () => {
      console.log(hiddenBlock)
      hiddenBlock.classList.toggle('hidden')
    }
    const clickAnchor = () => {
      togglePage()
      closeTrigger.click()
    }
    let itemsRows = document.querySelectorAll('.items-row')
    itemsRows.forEach(row => {
      const links = row.querySelectorAll('a')
      links.forEach(link => {
        link.addEventListener('click', clickAnchor)
      })
    })
    // // console.log(openTrigger)
    menuTrigger.addEventListener('click', togglePage)
    menuCloseTrigger.addEventListener('click', togglePage)

    var menu = $('.menu')
    var menuTop = $('.menu-bg.top')
    var menuMiddle = $('.menu-bg.middle')
    var menuBottom = $('.menu-bg.bottom')

    //TL
    var tlOpen = new TimelineMax({ paused: true })
    var tlClose = new TimelineMax({ paused: true })

    //OPEN TIMELINE
    tlOpen
      .add('preOpen')
      .to(
        openTriggerTop,
        0.4,
        {
          x: '+80px',
          y: '-80px',
          delay: 0.1,
          ease: Power4.easeIn,
          onComplete: function () {
            closeTrigger.css('z-index', '25')
          },
        },
        'preOpen'
      )
      .to(
        openTriggerMiddle,
        0.4,
        {
          x: '+=80px',
          y: '-=80px',
          ease: Power4.easeIn,
          onComplete: function () {
            openTrigger.css('visibility', 'hidden')
          },
        },
        'preOpen'
      )
      .to(
        openTriggerBottom,
        0.4,
        {
          x: '+=80px',
          y: '-=80px',
          delay: 0.2,
          ease: Power4.easeIn,
        },
        'preOpen'
      )
      .add('open', '-=0.4')
      .to(
        menuTop,
        0.8,
        {
          y: '13%',
          ease: Power4.easeInOut,
        },
        'open'
      )
      .to(
        menuMiddle,
        0.8,
        {
          scaleY: 1,
          ease: Power4.easeInOut,
        },
        'open'
      )
      .to(
        menuBottom,
        0.8,
        {
          y: '-114%',
          ease: Power4.easeInOut,
        },
        'open'
      )
      .fromTo(
        menu,
        0.6,
        {
          y: 30,
          opacity: 0,
          visibility: 'hidden',
        },
        {
          y: 0,
          opacity: 1,
          visibility: 'visible',
          ease: Power4.easeOut,
        },
        '-=0.2'
      )
      .add('preClose', '-=0.8')
      .to(
        logo,
        0.6,
        {
          scale: 1,
          opacity: 1,
          ease: Power4.easeInOut,
        },
        'close',
        '+=0.2'
      )
      .to(
        closeTriggerLeft,
        0.8,
        {
          transform: 'matrix(0.70711, -0.70711, 0.70711, 0.70711, 0, 0)',
          // x: '-=100px',
          // y: '+=100px',
          ease: Power4.easeOut,
          left: '1px',
          top: '18px',
          // top: '1px',
          // left: '19px',
        },
        'preClose'
      )
      .to(
        closeTriggerRight,
        0.8,
        {
          transform: 'matrix(0.70711, 0.70711, -0.70711, 0.70711, 0, 0)',
          // x: '+=100px',
          // y: '+=100px',
          delay: 0.2,
          ease: Power4.easeOut,
          top: '14px',
          left: '-1px',
        },
        'preClose'
      )
      .to(logo, -1, { backgroundColor: '#191919' })
    // .to(
    //   logo,
    //   0.8,
    //   {
    //     scale: 1,
    //     opacity: 1,
    //     ease: Power4.easeInOut,
    //   },
    //   'close',
    //   '+=0.2'
    // )
    // .to(closeTriggerRight, 0, { top: '4px', left: '-10px' })

    //CLOSE TIMELINE
    tlClose
      .add('close')
      .to(
        logo,
        0.4,
        {
          scale: 0.8,
          opacity: 0,
          ease: Power2.easeOut,
        },
        'preOpen'
      )
      .to(
        menuTop,
        0.2,
        {
          backgroundColor: '#35682b',
          ease: Power4.easeInOut,
          onComplete: function () {
            logo.css('z-index', '26')
            closeTrigger.css('z-index', '5')
            openTrigger.css('visibility', 'visible')
          },
        },
        'close'
      )
      .to(
        menuMiddle,
        0.2,
        {
          backgroundColor: '#35682b',
          ease: Power4.easeInOut,
        },
        'close'
      )
      .to(
        menuBottom,
        0.2,
        {
          backgroundColor: '#35682b',
          ease: Power4.easeInOut,
        },
        'close'
      )
      .to(
        menu,
        0.6,
        {
          y: 20,
          opacity: 0,
          ease: Power4.easeOut,
          onComplete: function () {
            menu.css('visibility', 'hidden')
          },
        },
        'close'
      )
      .to(
        menuTop,
        0.8,
        {
          y: '-113%',
          ease: Power4.easeInOut,
        },
        'close',
        '+=0.2'
      )
      .to(
        menuMiddle,
        0.8,
        {
          scaleY: 0,
          ease: Power4.easeInOut,
        },
        'close',
        '+=0.2'
      )
      .to(
        menuBottom,
        0.8,
        {
          y: '23%',
          ease: Power4.easeInOut,
          onComplete: function () {
            menuTop.css('background-color', '#191919')
            menuMiddle.css('background-color', '#191919')
            menuBottom.css('background-color', '#191919')
          },
        },
        'close',
        '+=0.2'
      )
      .to(
        closeTriggerLeft,
        0.2,
        {
          x: '+=100px',
          y: '-=100px',
          top: 0,
          left: 0,
          ease: Power4.easeIn,
        },
        'close'
      )
      .to(
        closeTriggerRight,
        0.2,
        {
          x: '+=100px',
          y: '+=100px',
          top: 0,
          left: 0,
          delay: 0.1,
          ease: Power4.easeIn,
        },
        'close'
      )
      .to(
        openTriggerTop,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          delay: 0.2,
          ease: Power4.easeOut,
        },
        'close'
      )
      .to(
        openTriggerMiddle,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          ease: Power4.easeOut,
        },
        'close'
      )
      .to(
        openTriggerBottom,
        1,
        {
          x: '-=80px',
          y: '+=80px',
          delay: 0.1,
          ease: Power4.easeOut,
        },
        'close'
      )

    //EVENTS
    openTrigger.on('click', function () {
      if (tlOpen.progress() < 1) {
        tlOpen.play()
      } else {
        tlOpen.restart()
      }
    })

    closeTrigger.on('click', function () {
      if (tlClose.progress() < 1) {
        tlClose.play()
      } else {
        tlClose.restart()
      }
    })
  }, [])
  return (
    <>
      <Script
        strategy='beforeInteractive'
        src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'
      />
      <Script
        strategy='beforeInteractive'
        src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js'
      />
      <Script
        strategy='beforeInteractive'
        src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TimelineMax.min.js'
      />
      <div className='container1'>
        <Container>
          <div className='menu-header-wrapper'>
            <LogoIcon />
            <div className='menu-buttons-wrapper'>
              <span className='menu-trigger'>
                <i className='menu-trigger-bar top'></i>
                <i className='menu-trigger-bar middle'></i>
                <i className='menu-trigger-bar bottom'></i>
              </span>
              <span className='close-trigger'>
                <i className='close-trigger-bar left'></i>
                <i className='close-trigger-bar right'></i>
              </span>
            </div>
          </div>
        </Container>
        <FirstSection />
        <div className='inner-container'>
          <i className='menu-bg top'></i>
          <i className='menu-bg middle'></i>
          <i className='menu-bg bottom'></i>
          <div className='menu-container logo'>
            <Container className={styles.container}>
              <div className='menu-container-inner'>
                <h2 className='menu-title'>меню</h2>
                <div className='menu-items-container'>
                  <div className='items-row'>
                    <a href='#about-us'>О Сервисе</a>
                    <a href='#tab-section'>Наш подход</a>
                    <a href='#tab-section'>Наша команда</a>
                  </div>
                  <div className='items-row'>
                    <a href='#our-services'>Наши услуги</a>
                    <a href='#financical-replacement'>
                      Финансовые перестановки
                    </a>
                    <a href='#money-exchange'>Обмен валют</a>
                  </div>
                  <div className='items-row'>
                    <a href='#priveleges'>Привилегии</a>
                    <a href='#it-products'>IT-продукты Kraftex</a>
                    <a href='#invite'>Стать клиентом Kraftex</a>
                  </div>
                </div>
                <div className='contact-container'>
                  <div className='contact-item'>
                    <div className='contact-item-title'>Адрес</div>
                    <div className='contact-item-body'>
                      Москва, ММДЦ «Москва-Сити», Пресненская набережная, д. 12
                      (Башня Федерация)
                    </div>
                  </div>
                  <div className='contact-item'>
                    <div className='contact-item-title'>Контакты</div>
                    <div className='contact-item-body split'>
                      <div className='contact-email'>e-mail: mail@mail.ru </div>
                      <div>+7 999 999-99-99</div>
                    </div>
                  </div>
                  <div className='contact-item links'>
                    <Link href='https://web.telegram.org'>
                      <TelegramIcon />
                    </Link>
                    <Link href='https://instagram.com/'>
                      <InstagramIcon />
                    </Link>
                    <Link href='https://facebook.com'>
                      <FacebookIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
