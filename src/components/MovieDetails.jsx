import { useEffect, useState } from 'react'
import { Col, Row, Card } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [films, setFilm] = useState({})
  const params = useParams()
  console.log('params', params)

  const getFilm = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&i=' + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore')
        }
      })
      .then((data) => {
        console.log(data.Title)
        console.log('It Works')
        setFilm({ ...data })
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  //   const filmToShow = films.find((film) => {
  //     return film.imdbId === params.imdbId
  //   })
  //   console.log('film da mostrare', filmToShow)
  useEffect(() => {
    getFilm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId])
  console.log('vediamo', films)
  return (
    <Row className='justify-content-center'>
      <Col xs={12} md={8} lg={6}>
        {films && (
          <Card className='h-100'>
            <Card.Img variant='top' src={films.Poster} className='h-75' />
            <Card.Body>
              <Card.Title>{films.Title}</Card.Title>
              <Card.Text>{films.Plot}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  )
}

export default MovieDetails
