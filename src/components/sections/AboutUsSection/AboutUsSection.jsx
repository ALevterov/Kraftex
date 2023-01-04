import Container from 'components/ui/Container/Container'
import Image from 'next/image'
import styles from './AboutUsSection.module.css'
import dollarImage from '../../../../public/assets/dollar.png'

const AboutUsSection = () => {
  return (
    <Container className='section' id='about-us'>
      <div className={styles.aboutUsSection}>
        <div className={styles.imageContainer}>
          <Image src={dollarImage.src} fill />
        </div>
        <div className={styles.textContainer}>
          <p>
            <span className='active'>
              Kraftex — Ваш надежный партнёр в сфере управления капиталом
            </span>
          </p>
          <br />
          <p>
            Мы предлагаем эксклюзивные услуги и индивидуальное обслуживание для
            <span className='active'> особых клиентов</span>, а также
            современные и надежные
            <span className='active'> финансовые решения</span>
            для частных партнеров и бизнеса в области электронных, цифровых,
            наличных и <span className='active'> безналичных платежей</span> в
            России и за ее пределами в рамках внешнеэкономической деятельности.
          </p>
          <br />
          <p>
            Множество состоятельных клиентов, предпринимателей и трейдеров
            используют решения компании Kraftex для безопасного проведения
            финансовых операций: от обмена валют и открытия банковского счета до
            выполнения трансграничных переводов и заключения крупных сделок.
          </p>
        </div>
      </div>
    </Container>
  )
}

export default AboutUsSection
