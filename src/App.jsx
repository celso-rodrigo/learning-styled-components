import { Title } from './Styles/TittleStyles'
import { Button } from './Styles/ButtonStyles'
import { ButtonsContainer, Container } from './Styles/ContainerStyles'

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
    </Container>
  )
}

export default App
