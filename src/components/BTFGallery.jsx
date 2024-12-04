import SingleCard from './SingleCard'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BTFGallery = (props) => {
  return (
    <Row className='g-3'>
      {props.filmList.slice(0, 6).map((singleFilm) => {
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

export default BTFGallery
