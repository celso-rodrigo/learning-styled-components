import { Title } from './Styles/TittleStyles'
import { Button, RedButton } from './Styles/ButtonStyles'
import { ButtonsContainer, Container } from './Styles/ContainerStyles'
import TextColor from './Components/TextColor'

function App() {
  return (
    <Container>
      <Title>
          Hello, world!
      </Title>

      <ButtonsContainer>
        <Button>Default</Button>
        <Button $primary>Fill</Button>
      </ButtonsContainer>

      <ButtonsContainer>
        <RedButton>Red</RedButton>
      </ButtonsContainer>

      <ButtonsContainer>
        {/* Rendering anchor tag using Button styles */}
        <Button as="a" href="https://www.google.com" target='_blank' rel='external'>
          Anchor as button
        </Button>
      </ButtonsContainer>

      <TextColor />
    </Container>
  )
}

export default App
