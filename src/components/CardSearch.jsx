import { Card } from 'react-bootstrap'
import { useState } from 'react'
const CardSearch = (props) => {
  const [active, setActive] = useState(false)
  const handleActive = () => {
    setActive(!active)
  }
  return (
    <Card
      className={active ? 'h-100 scale' : 'h-100'}
      onMouseEnter={handleActive}
      onMouseLeave={handleActive}
    >
      <Card.Img variant='top' src={props.film.Poster} />
      <Card.Body className=' text-center text-light bg-dark'>
        <Card.Title>{props.film.Title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CardSearch
