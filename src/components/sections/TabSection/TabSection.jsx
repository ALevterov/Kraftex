import Container from 'components/ui/Container/Container'
import Slider from 'components/ui/Slider/Slider'
import TabBar from 'components/ui/TabBar/TabBar'
import BlockServices from 'components/ui/WhiteBlock/Services/BlockServices'
import WhiteBlock from 'components/ui/WhiteBlock/WhiteBlock'

const TabSection = () => {
  return (
    <Container className='section' id='tab-section'>
      <TabBar />
      <Slider />
      <WhiteBlock id='our-services'>
        <BlockServices />
      </WhiteBlock>
    </Container>
  )
}

export default TabSection
