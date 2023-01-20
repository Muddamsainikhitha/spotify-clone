import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div>
        <Link to="/" className="link-item">
          <h1 className="website"> Spotify </h1>
        </Link>
      </div>
      <ul className="header-list-items">
        <Link to="/" className="link-item">
          <li className="home-heading home"> Home </li>
        </Link>
        <Link to="/Favourite" className="link-item">
          <li className="jon-heading home"> Favourites </li>
        </Link>
        <Link to="/Playlists" className="link-item">
          <li className="jon-heading home"> PlayLists </li>
        </Link>
      </ul>
      <div>
        <input type="search" placeholder="search" className="search-input" />
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
