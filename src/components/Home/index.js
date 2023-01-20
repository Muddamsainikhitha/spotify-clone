import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <img
          src="https://res.cloudinary.com/dbaekmnhf/image/upload/v1673794528/Pink_Yellow-Generic-Header-1440x820-1-1440x733_clxmo7.png"
          alt="WebsiteLogo"
          className="website-logo"
        />
        <p className="title">Playlists</p>
        <hr />
        <ul className="image-container">
          <li>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png"
                alt="perfect"
                className="image"
              />
              <p className="song-name">perfect</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png"
                alt="shape of you"
                className="image"
              />
              <p className="song-name">Shape of you</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png"
                alt="Visiting Hours"
                className="image"
              />
              <p className="song-name">Visiting Hours</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png"
                alt="Shivers"
                className="image"
              />
              <p className="song-name">Shivers</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png"
                alt="Bad Habits"
                className="image"
              />
              <p className="song-name">Bad Habits</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png"
                alt="Castle on the Hill"
                className="image"
              />
              <p className="song-name">Castle on the Hill</p>
            </div>
          </li>
          <li>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png"
                alt="Happier"
                className="image"
              />
              <p className="song-name">Happier</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
