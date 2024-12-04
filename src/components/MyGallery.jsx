import { Alert, Spinner, ListGroup } from 'react-bootstrap'
import LOTRGallery from './LOTRGallery'
import BTFGallery from './BTFGallery'
import SWGallery from './SWGallery'
import { useEffect, useState } from 'react'

const MyGallery = () => {
  const [firstSaga, setFirstSaga] = useState([])
  const [secondSaga, setSecondSaga] = useState([])
  const [thirdSaga, setThirdSaga] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const getFilms1 = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=The Lord of the Rings')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta')
        }
      })
      .then((arrayOfFilms) => {
        console.log(arrayOfFilms)
        setIsLoading(false)
        setFirstSaga(arrayOfFilms.Search)
      })
      .catch((error) => {
        console.log('error', error)
        setIsError(true)
        setIsLoading(false)
      })
  }
  const getFilms2 = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=Star Wars')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta')
        }
      })
      .then((arrayOfFilms) => {
        console.log(arrayOfFilms)
        setIsLoading(false)
        setSecondSaga(arrayOfFilms.Search)
      })
      .catch((error) => {
        console.log('error', error)
        setIsError(true)
        setIsLoading(false)
      })
  }
  const getFilms3 = () => {
    fetch('http://www.omdbapi.com/?apikey=ebbddf84&s=Back to Future')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella richiesta')
        }
      })
      .then((arrayOfFilms) => {
        console.log(arrayOfFilms)

        setIsLoading(false)
        setThirdSaga(arrayOfFilms.Search)
      })
      .catch((error) => {
        console.log('error', error)

        setIsError(true)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getFilms1()
  }, [])
  useEffect(() => {
    getFilms2()
  }, [])
  useEffect(() => {
    getFilms3()
  }, [])
  // this.getFilms2()
  // this.getFilms3()

  return (
    <>
      <div className='my-5 '>
        <h3>LOTR Saga</h3>
        {isError &&
          firstSaga.length ===
            0(
              <Alert variant='danger'>Oops! Qualcosa è andato storto!😭</Alert>
            )}
        {isLoading && <Spinner animation='grow' />}
        {!isLoading && !isError && firstSaga.length === 0 && (
          <ListGroup>
            <ListGroup.Item>
              La tua ricerca non ha prodotto risultati!
            </ListGroup.Item>
          </ListGroup>
        )}

        <LOTRGallery filmList={firstSaga.slice(0, 6)} />
      </div>
      <div>
        <h3 className='my-5'>Star wars Saga</h3>
        {isError && secondSaga.length === 0 && (
          <Alert variant='danger'>Oops! Qualcosa è andato storto!😭</Alert>
        )}
        {isLoading && <Spinner animation='grow' />}
        {!isLoading && !isError && secondSaga.length === 0 && (
          <ListGroup>
            <ListGroup.Item>
              La tua ricerca non ha prodotto risultati!
            </ListGroup.Item>
          </ListGroup>
        )}
        <SWGallery filmList={secondSaga.slice(0, 6)} />
      </div>
      <div>
        <h3 className='my-5'>BTF Saga</h3>
        {isError && (
          <Alert variant='danger'>Oops! Qualcosa è andato storto!😭</Alert>
        )}
        {isLoading && <Spinner animation='grow' />}
        {!isLoading && !isError && thirdSaga.length === 0 && (
          <ListGroup>
            <ListGroup.Item>
              La tua ricerca non ha prodotto risultati!
            </ListGroup.Item>
          </ListGroup>
        )}
        <BTFGallery filmList={thirdSaga.slice(0, 6)} />
      </div>
    </>
  )
}

export default MyGallery
