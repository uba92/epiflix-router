import SingleCard from './SingleCard'
import { Row } from 'react-bootstrap'

const BTFGallery = (props) => {
  return (
    <Row className='g-3'>
      {props.filmList.slice(0, 6).map((singleFilm) => {
        return <SingleCard key={singleFilm.imdbID} film={singleFilm} />
      })}
    </Row>
  )
}

export default BTFGallery
