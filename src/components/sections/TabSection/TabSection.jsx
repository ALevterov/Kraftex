import Container from 'components/ui/Container/Container'
import TabBar from 'components/ui/TabBar/TabBar'
import BlockServices from 'components/ui/WhiteBlock/Services/BlockServices'
import WhiteBlock from 'components/ui/WhiteBlock/WhiteBlock'

const TabSection = () => {
  return (
    <Container className='section' id='tab-section'>
      <TabBar />
      <WhiteBlock id='our-services'>
        <BlockServices />
      </WhiteBlock>
    </Container>
  )
}

export default TabSection
