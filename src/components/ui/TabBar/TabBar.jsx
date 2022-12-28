import { useState } from 'react'
import styles from './TabBar.module.css'
import TabBarItem from './TabBarItem/TabBarItem'
import TabBarNav from './TabBarNav/TabBarNav'

const TabBar = () => {
  const [activeTab, setActiveTab] = useState('Наш подход')

  const handleChangeActiveTab = label => {
    if (label === activeTab) return
    setActiveTab(label)
  }

  return (
    <div className={styles.tabBar}>
      <TabBarNav
        onChangeActiveTab={handleChangeActiveTab}
        activeTab={activeTab}
      >
        <TabBarItem label='Наш подход' activeTab={activeTab}>
          <div className={styles.tabBarItemContainer}>
            <p>
              <span className='active'>Ваши финансовые цели и задачи</span> -
              стартовый этап нашего партнёрства, а их достижение — основной
              показатель совместного успеха.
            </p>
            <p>
              <span className='active'>Наша миссия:</span> «Полное выполнение
              поставленных задач с гарантией максимальной безопасности и личной
              ответственности».
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
              <li>
                качественному офисному и онлайн-
                <br />
                обслуживанию;
              </li>
              <li>наличию защищенных операционных касс;</li>
            </ul>
            <ul className={styles.tabBarListContainerItem}>
              <li>собственной IT-инфраструктуре;</li>
              <li>
                высокому уровню безопасности сделок <br />и денежных переводов;
              </li>
              <li>
                опциям взаимодействия с множеством <br />
                валют и криптовалют;
              </li>
              <li>множеству постоянных клиентов;</li>
              <li>большим подтвержденным резервам;</li>
            </ul>
            <ul className={styles.tabBarListContainerItem}>
              <li>
                выгодным курсам конвертации
                <br /> и обмена;
              </li>
              <li>
                низким комиссиям за операции
                <br /> и услуги;
              </li>
              <li>
                оперативному оформлению
                <br /> документов;
              </li>
              <li>высокой скорости обслуживания;</li>
              <li>качественной клиентской поддержке;</li>
            </ul>
          </div>
        </TabBarItem>
        <TabBarItem label='Наша команда' activeTab={activeTab}>
          <div className={styles.tabBarItemContainer}>
            <p>
              Почему нам можно доверять?{' '}
              <span className='active'>
                В Kraftex работает опытная и компетентная команда
              </span>
              , готовая предложить индивидуальные решения и максимальный уровень
              комфорта в в выполнении как повседневных, так и самых неординарных
              задач.
            </p>
            <br />
            <p>
              <span className='active'>Персональный менеджер Kraftex</span> —
              ваше доверенное лицо, с которым можно обсудить интересующие темы и
              актуальные финансовые вопросы.{' '}
              <span className='active'>К вашим услугам:</span> финансисты,
              юристы, банковские и налоговые консультанты, бухгалтеры,
              экономисты, крипто-эксперты, инвесторы, трейдеры, IT-специалисты и
              адвайзеры.
            </p>
            <br />
            <p>
              Офисы, кассы и онлайн-сервисы Kraftex предназначены для
              возможности <span className='active'>безопасной</span> организации
              любых финансовых операций: временного хранения цифровых и фиатных
              финансовых активов, приема/выдачи платежей, инкассации между
              странами и городами.
            </p>
          </div>
        </TabBarItem>
        <TabBarItem label='Наши услуги' activeTab={activeTab}>
          <div className={styles.tabBarItemContainer}>
            <div className={styles.tabBarListContainer}>
              <ul className={styles.tabBarListContainerItem}>
                <li>
                  <span className='active'>Приватное обслуживание</span> -
                  решение повседневных и нестандартных
                  <br /> финансовых задач;
                </li>
                <li>
                  <span className='active'>Финансовые продукты</span> -
                  уникальный подход к управлению капиталом и<br /> эксклюзивные
                  решения;
                </li>
                <li>
                  <span className='active'>Крипто—фиатный сервис</span> -
                  безграничные возможности для решения
                  <br /> финансовых задач;
                </li>
              </ul>
              <ul className={styles.tabBarListContainerItem}>
                <li>
                  <span className='active'>Финансовые перестановки</span> -
                  одномоментные перемещения финансовых
                  <br /> активов по всему миру;
                </li>
                <li>
                  <span className='active'>Обмен валют</span> - широкий спектр
                  направлений и выгодные котировки обмена
                  <br /> валют и криптовалют;
                </li>
                <li>
                  <span className='active'>Логистические решения</span>
                  - сопровождение экспортно-импортных операций
                  <br /> по всему миру
                </li>
              </ul>
            </div>
          </div>
          <p className={styles.itemPar}>
            Специалисты Kraftex также готовы рассмотреть любого рода задачу в
            сфере финансового консалтинга и помочь Вам найти наиболее подходящее
            и эффективное решение.
          </p>
        </TabBarItem>
      </TabBarNav>
    </div>
  )
}

export default TabBar
