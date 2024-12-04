import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import { Container } from 'react-bootstrap'
import MyHeading from './components/MyHeading'
import MyGallery from './components/MyGallery'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <div className='App bg-dark text-light'>
      <header>
        <MyNavbar logoPath={'./assets/images/logo.png'} isFluid={true} />
      </header>
      <main className='bg-dark text-light'>
        <Container fluid>
          <MyHeading />
        </Container>
        <Container fluid>
          <MyGallery />
        </Container>
      </main>
      <footer className='bg-dark text-light'>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
