import { Component } from 'react'

class MyFooter extends Component {
  render() {
    return (
      <div className='justify-content-center d-flex'>
        <div className='col col-6'>
          <div className='row'>
            <div className='col mb-2'>
              <i className='bi bi-facebook footer-icon me-2'></i>
              <i className='bi bi-instagram footer-icon me-2'></i>
              <i className='bi bi-twitter-x footer-icon me-2'></i>
              <i className='bi bi-youtube footer-icon'></i>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4'>
            <div className='col'>
              <div className='row'>
                <div className='col footer-links'>
                  <p>Audio and Subtitles</p>
                  <p>Media Center</p>
                  <p>Privacy</p>
                  <p>Contact us</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col footer-links'>
                  <p>Audio Description</p>
                  <p>Investor Relations</p>
                  <p>Legal Notices</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col footer-links'>
                  <p>Help Center</p>
                  <p>Jobs</p>
                  <p>Cookie Preferences</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='row'>
                <div className='col footer-links'>
                  <p>Gift Cards</p>
                  <p>Terms of Use</p>
                  <p>Corporate Information</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col mb-2'>
              <button
                type='button'
                className='btn btn-sm footer-button rounded-0 mt-3'
              >
                Service Code
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col mb-2 mt-2 copyright'>
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyFooter
