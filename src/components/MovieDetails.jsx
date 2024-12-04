import { useEffect, useState } from 'react'
import { Col, Row, Card } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [films, setFilm] = useState([])
  const params = useParams()
  console.log('params', params)

  const getFilm = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=' + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore')
        }
      })
      .then((data) => {
        console.log(data)
        console.log('works')
        setFilm(data.Search)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  //   const filmToShow = films.find((film) => {
  //     return film.Title === params.Title
  //   })
  useEffect(() => {
    getFilm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Row className='justify-content-center'>
      <Col xs={12} md={8} lg={6}>
        <Card>
          <Card.Img variant='top' src={films[0].Poster} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default MovieDetails
