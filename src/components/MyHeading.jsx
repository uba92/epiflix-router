import { Row, Col, Dropdown, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const MyHeading = () => {
  const navigate = useNavigate()

  const goSearch = () => {
    navigate('/search')
  }
  return (
    <Row>
      <Col
        sm={6}
        className='bg-dark text-start text-light d-flex align-items-center'
      >
        <h1>TV Shows</h1>
        <Dropdown className='ms-3'>
          <Dropdown.Toggle variant='dark' id='dropdown-basic'>
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu variant='dark'>
            <Dropdown.Item href='#/action-1'>Fantasy</Dropdown.Item>
            <Dropdown.Item href='#/action-2'>SciFi</Dropdown.Item>
            <Dropdown.Item href='#/action-3'>Fantscienza</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col sm={6} className='d-flex justify-content-end align-items-center'>
        <Button variant='outline-light' onClick={goSearch}>
          Search
        </Button>
      </Col>
    </Row>
  )
}

export default MyHeading
