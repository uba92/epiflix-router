import { useState } from 'react'
import { Card } from 'react-bootstrap'
const SingleCard = (props) => {
  const [active, setActive] = useState(false)

  const handleEnter = () => {
    setActive(true)
  }
  const handleLeave = () => {
    setActive(false)
  }
  return (
    <Card
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={
        active ? 'h-100 overflow-hidden scale' : 'h-100 overflow-hidden'
      }
    >
      <Card.Img variant='top' src={props.film.Poster} />
    </Card>
  )
}

export default SingleCard
