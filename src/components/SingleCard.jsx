import { Col, Card } from 'react-bootstrap'
const SingleCard = (props) => {
  return (
    <Col className='scale' style={{ height: '200px' }} sm={12} md={6} lg={2}>
      <Card className='h-100 overflow-hidden'>
        <Card.Img variant='top' src={props.film.Poster} />
      </Card>
    </Col>
  )
}

export default SingleCard
