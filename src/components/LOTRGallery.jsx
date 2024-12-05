import { Link } from 'react-router-dom'
import SingleCard from './SingleCard'
import { Row, Col } from 'react-bootstrap'

const LOTRGallery = (props) => {
  return (
    <Row className='g-3 p-3'>
      {props.filmList.map((singleFilm) => {
        return (
          <Col
            key={singleFilm.imdbID}
            className='scale'
            style={{ height: '200px' }}
            sm={12}
            md={6}
            lg={2}
          >
            <Link to={'/movie-details/' + singleFilm.Title}>
              <SingleCard film={singleFilm} />
            </Link>
          </Col>
        )
      })}
    </Row>
  )
}

export default LOTRGallery
