import Header from '../Header'

import './index.css'

const Favourite = () => (
  <>
    <Header />
    <h1 className="fav-title">MY Favourites</h1>
    <p className="tag">Play your favourite songs here</p>
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
  </>
)

export default Favourite
