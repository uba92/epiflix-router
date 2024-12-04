import { Component } from 'react'
import { Alert, Spinner, ListGroup } from 'react-bootstrap'
import LOTRGallery from './LOTRGallery'
import BTFGallery from './BTFGallery'
import SWGallery from './SWGallery'

class MyGallery extends Component {
  state = {
    films1: [],
    films2: [],
    films3: [],
    isLoading: true,
    isError: false,
  }

  getFilms1 = () => {
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
        this.setState({
          films1: arrayOfFilms.Search,
        })
      })
      .catch((error) => {
        this.setState({
          isError: true,
        })
        console.log('error', error)
      })
  }
  getFilms2 = () => {
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
        this.setState({
          films2: arrayOfFilms.Search,
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }
  getFilms3 = () => {
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
        this.setState({
          films3: arrayOfFilms.Search,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.log('error', error)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  // this.getFilms2()
  // this.getFilms3()
  componentDidMount() {
    this.getFilms1()
    this.getFilms2()
    this.getFilms3()
  }

  render() {
    return (
      <>
        <div className='my-5 '>
          <h3>LOTR Saga</h3>
          {this.state.isError && (
            <Alert variant='danger'>Oops! Qualcosa è andato storto!😭</Alert>
          )}
          {this.state.isLoading && <Spinner animation='grow' />}
          {!this.state.isLoading &&
            !this.state.isError &&
            this.state.films1 === 0 && (
              <ListGroup>
                <ListGroup.Item>
                  La tua ricerca non ha prodotto risultati!
                </ListGroup.Item>
              </ListGroup>
            )}

          <LOTRGallery filmList={this.state.films1.slice(0, 6)} />
        </div>
        <div>
          <h3 className='my-5'>Star wars Saga</h3>
          {this.state.isError && this.state.films2 === 0 && (
            <Alert variant='danger'>Oops! Qualcosa è andato storto!😭</Alert>
          )}
          {this.state.isLoading && <Spinner animation='grow' />}
          {!this.state.isLoading &&
            !this.state.isError &&
            this.state.films2 === 0 && (
              <ListGroup>
                <ListGroup.Item>
                  La tua ricerca non ha prodotto risultati!
                </ListGroup.Item>
              </ListGroup>
            )}
          <SWGallery filmList={this.state.films2.slice(0, 6)} />
        </div>
        <div>
          <h3 className='my-5'>BTF Saga</h3>
          {this.state.isError && (
            <Alert variant='danger'>Oops! Qualcosa è andato storto!😭</Alert>
          )}
          {this.state.isLoading && <Spinner animation='grow' />}
          {!this.state.isLoading &&
            !this.state.isError &&
            this.state.films3 === 0 && (
              <ListGroup>
                <ListGroup.Item>
                  La tua ricerca non ha prodotto risultati!
                </ListGroup.Item>
              </ListGroup>
            )}
          <BTFGallery filmList={this.state.films3.slice(0, 6)} />
        </div>
      </>
    )
  }
}

export default MyGallery
