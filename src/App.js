import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import { Container } from 'react-bootstrap'
import MyHeading from './components/MyHeading'
import MyGallery from './components/MyGallery'
import MyFooter from './components/MyFooter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GoT from './components/GoT'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className='App bg-dark text-light'>
        <header>
          <MyNavbar logoPath={'./assets/images/logo.png'} isFluid={true} />
        </header>
        <main className='bg-dark text-light'>
          <Container fluid>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    <MyHeading />
                    <MyGallery />
                  </>
                }
              />
              <Route path='/tv-shows' element={<GoT />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <footer className='bg-dark text-light'>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
