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
      />
      <ServiceItem
        text={'Обмен валют'}
        icon={<ExchangeIcon />}
        withBorder={true}
      />
      <ServiceItem text={'IT-продукты Kraftex'} icon={<WebSettingsIcon />} />
    </>
  )
}

export default BlockServices
