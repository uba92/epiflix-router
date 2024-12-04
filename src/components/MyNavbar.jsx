import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../assets/images/logo.png'

const MyNavbar = (props) => {
  return (
    <Navbar expand='lg' data-bs-theme='dark' bg='dark'>
      <Container fluid={props.isFluid}>
        <Navbar.Brand href='#'>
          <img src={logo} alt='logo' width={'100px'} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>Tv Shows</Nav.Link>
            <Nav.Link href='#'>Movies</Nav.Link>
            <Nav.Link href='#'>Recently Added</Nav.Link>
            <Nav.Link href='#'>My List</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
