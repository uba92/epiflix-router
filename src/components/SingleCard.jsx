import { Card } from 'react-bootstrap'
const SingleCard = (props) => {
  return (
    <Card className='h-100 overflow-hidden'>
      <Card.Img variant='top' src={props.film.Poster} />
    </Card>
  )
}

export default SingleCard
