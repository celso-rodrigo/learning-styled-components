import { Title } from './Styles/TittleStyles'
import { Button, RedButton } from './Styles/ButtonStyles'
import { ButtonsContainer, Container } from './Styles/ContainerStyles'
import TextColor from './Components/TextColor'
import { ThemeProvider, styled } from 'styled-components'
import Loading from './Components/Loading'

function App() {
  // Defining components outside render
  const StyledComponentOutsideRender = styled.p`
    font-size: 1rem;
    text-align: center;
    color: #0A195B;
    font-family: 'Ubuntu', sans-serif;
  `;

  function styledText(text) {
    return <StyledComponentOutsideRender>{text}</StyledComponentOutsideRender>
  }

  function setTheme(theme) {
    return {main: theme}
  }

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

      {styledText("Sample Text")}

      <Loading />

      {/* Theme provider */}
      <ThemeProvider theme={{ main: 'orange'}}>
        <Title>Theamed Title</Title>
      </ThemeProvider>

      <ThemeProvider theme={setTheme("green")}>
        <Title>Theamed Title</Title>
      </ThemeProvider>
    </Container>
  )
}

export default App
