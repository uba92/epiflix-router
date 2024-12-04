import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const MyNavbar = (props) => {
  const location = useLocation()
  console.log(location)
  return (
    <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
      <Container fluid={props.isFluid}>
        <Link to='/' className='navbar-brand'>
          <img src={logo} alt='logo' width={'100px'} />
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link
              to='/'
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
            >
              <div>Home</div>
            </Link>
            <Link
              to='/tv-shows'
              className={
                location.pathname === '/tv-shows'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              <div>Tv Shows</div>
            </Link>
            <Link to='/movies' className='nav-link'>
              <div>Movies</div>
            </Link>
            <Link to='/recent' className='nav-link'>
              <div>Recently Added</div>
            </Link>
            <Link to='list' className='nav-link'>
              <div>My List</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
