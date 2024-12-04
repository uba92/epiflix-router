import { Component } from 'react'
import SingleCard from './SingleCard'
import { Row } from 'react-bootstrap'

class SWGallery extends Component {
  render() {
    return (
      <Row className='g-3'>
        {this.props.filmList.map((singleFilm) => {
          return <SingleCard key={singleFilm.imdbID} film={singleFilm} />
        })}
      </Row>
    )
  }
}

export default SWGallery
