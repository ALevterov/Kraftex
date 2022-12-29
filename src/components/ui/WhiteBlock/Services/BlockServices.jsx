import FinanceReportIcon from 'components/icons/FinanceReportIcon'
import ServiceItem from './ServiceItem'
import ExchangeIcon from 'components/icons/ExchangeIcon'
import WebSettingsIcon from 'components/icons/WebSettingsIcon'

const BlockServices = () => {
  return (
    <>
      <ServiceItem
        text={'Финансовые перестановки'}
        icon={<FinanceReportIcon />}
        withBorder={true}
        href={'#financical-replacement'}
      />
      <ServiceItem
        text={'Обмен валют'}
        icon={<ExchangeIcon />}
        withBorder={true}
        href={'#money-exchange'}
      />
      <ServiceItem
        href={'#it-products'}
        text={'IT-продукты Kraftex'}
        icon={<WebSettingsIcon />}
      />
    </>
  )
}

export default BlockServices
