import { Component } from 'react'
import SingleCard from './SingleCard'
import { Row } from 'react-bootstrap'

class BTFGallery extends Component {
  render() {
    return (
      <Row className='g-3'>
        {this.props.filmList.slice(0, 6).map((singleFilm) => {
          return <SingleCard key={singleFilm.imdbID} film={singleFilm} />
        })}
      </Row>
    )
  }
}

export default BTFGallery
