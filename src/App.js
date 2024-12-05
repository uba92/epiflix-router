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
import MovieDetails from './components/MovieDetails'
import SearchPage from './components/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column min-vh-100'>
        <header>
          <MyNavbar logoPath={'./assets/images/logo.png'} isFluid={true} />
        </header>
        <main className='bg-dark text-light flex-grow-1'>
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
              <Route path='/search' element={<SearchPage />} />
              <Route path='/tv-shows' element={<GoT />} />
              <Route
                path='/movie-details/:movieId'
                element={<MovieDetails />}
              />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Container>
        </main>
        <footer className='bg-dark text-light pt-5 mt-auto'>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
