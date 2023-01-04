import Header from 'components/ui/Header/Header'
import TabSection from 'components/sections/TabSection/TabSection'
import FirstSection from 'components/sections/firstSection/FirstSection'
import AboutUsSection from 'components/sections/AboutUsSection/AboutUsSection'
import FinansicalReplacement from 'components/sections/FinansicalReplacement/FinansicalReplacement'
import MoneyExchange from 'components/sections/MoneyExchange/MoneyExchange'
import Priveleges from 'components/sections/Priveleges/Priveleges'
import FactsAndNumbers from 'components/sections/FactsAndNumbers/FactsAndNumbers'
import ItProducts from 'components/sections/ItProducts/ItProducts'
import InviteSection from 'components/sections/InviteSection/InviteSection'
import Footer from 'components/sections/Footer/Footer'
import MapSection from 'components/sections/MapSection/MapSection'
import Menu from 'components/ui/Menu/Menu'

export default function Home() {
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <Menu />
        <div className='hidden-when-menu'>
          <AboutUsSection />
          <TabSection />
          <FinansicalReplacement />
          <MoneyExchange />
          <Priveleges />
          <FactsAndNumbers />
          <ItProducts />
          <InviteSection />
          <MapSection />
          <Footer />
        </div>
      </div>
    </>
  )
}
