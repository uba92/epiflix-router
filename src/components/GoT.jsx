import { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GoT = () => {
  const [gotShows, setGotShows] = useState([])

  const getShows = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=fast')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta!')
        }
      })
      .then((arrayOfShows) => {
        console.log('GOT', arrayOfShows)
        console.log('ENTRATO')
        setGotShows(arrayOfShows.Search)
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  useEffect(() => {
    getShows()
  }, [])
  return (
    <Row>
      {gotShows.map((show) => {
        return (
          <Col key={show.imdbID} sm={12} md={6} lg={4}>
            <Link to={'/movie-details/' + show.imdbID}>
              <Card className='h-75 overflow-hidden'>
                <Card.Img variant='top' src={show.Poster} />
              </Card>
            </Link>
          </Col>
        )
      })}
    </Row>
  )
}

export default GoT
