import SingleCard from './SingleCard'
import { Row } from 'react-bootstrap'

const LOTRGallery = (props) => {
  return (
    <Row className='g-3'>
      {props.filmList.map((singleFilm) => {
        return <SingleCard key={singleFilm.imdbID} film={singleFilm} />
      })}
    </Row>
  )
}

export default LOTRGallery
