import Header from 'components/ui/Header/Header'
import TabSection from 'components/sections/TabSection/TabSection'
import FirstSection from 'components/sections/firstSection/FirstSection'
import AboutUsSection from 'components/sections/AboutUsSection/AboutUsSection'
import FinansicalReplacement from 'components/sections/FinansicalReplacement/FinansicalReplacement'
import MoneyExchange from 'components/sections/MoneyExchange/MoneyExchange'
import Priveleges from 'components/sections/Priveleges/Priveleges'
import FactsAndNumbers from 'components/sections/FactsAndNumbers/FactsAndNumbers'
import ItProducts from 'components/sections/ItProducts/ItProducts'

export default function Home() {
  return (
    <>
      <Header />
      <FirstSection />
      <AboutUsSection />
      <TabSection />
      <FinansicalReplacement />
      <MoneyExchange />
      <Priveleges />
      <FactsAndNumbers />
      <ItProducts />
    </>
  )
}