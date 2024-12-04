import { useEffect, useState } from 'react'
import { Col, Row, Card, Spinner, Alert } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

const MovieDetails = () => {
  const [films, setFilm] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
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
        setFilm({ ...data })
        setIsLoading(false)
      })
      .catch((err) => {
        console.log('error', err)
        setIsLoading(false)
        setIsError(true)
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
  console.log(films)
  return (
    <Row className='justify-content-center'>
      <Col xs={12} md={8} lg={6}>
        {isError && (
          <Alert variant='danger'>Oops! Qualcosa è andato storto!😭</Alert>
        )}
        {isLoading && (
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}

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
