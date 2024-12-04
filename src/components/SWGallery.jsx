import SingleCard from './SingleCard'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SWGallery = (props) => {
  return (
    <Row className='g-3'>
      {props.filmList.map((singleFilm) => {
        return (
          <Col
            className='scale'
            style={{ height: '200px' }}
            sm={12}
            md={6}
            lg={2}
          >
            <Link to={'/movie-details/' + singleFilm.Title}>
              <SingleCard key={singleFilm.imdbID} film={singleFilm} />
            </Link>
          </Col>
        )
      })}
    </Row>
  )
}

export default SWGallery
