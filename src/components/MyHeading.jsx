import { Row, Col, Dropdown } from 'react-bootstrap'
const MyHeading = () => {
  return (
    <Row>
      <Col
        sm={12}
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
    </Row>
  )
}

export default MyHeading
