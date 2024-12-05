import { useState, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import CardSearch from './CardSearch'

const SearchPage = () => {
  const [query, setQuery] = useState('')
  const [films, setFilms] = useState([])

  const getFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=ebbddf84&s=${query}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta!')
        }
      })
      .then((searchResult) => {
        console.log('film trovati', searchResult)
        setFilms(searchResult.Search)
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  useEffect(() => {
    getFilms()
    console.log('films', films)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])
  return (
    <>
      <Row className='justify-content-center'>
        <Col sm={12} md={8} lg={4}>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Control
                type='text'
                placeholder='Search a film'
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className='justify-content-center g-3'>
        {films &&
          films.map((film) => {
            return (
              <Col xs={12} md={4} lg={3} key={film.imdbID}>
                <CardSearch film={film} />
              </Col>
            )
          })}
      </Row>
    </>
  )
}

export default SearchPage
