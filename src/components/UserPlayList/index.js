import './index.css'

const UserPlayList = props => {
  const {songDetails} = props
  const {imageUrl, name, genre, duration} = songDetails

  return (
    <li className="song-card-container">
      <div className="playList-items-container">
        <div className="name-genre-container">
          <img src={imageUrl} className="playlist-song-pic" alt="song-pic" />
          <div className="song-details-container">
            <h1 className="playlist-song-name"> {name} </h1>
            <p className="playlist-song-genre"> {genre} </p>
            <button type="button" className="button">
              Add to favourite
            </button>
          </div>
        </div>
        <p className="playlist-song-duration">{duration}</p>
      </div>
    </li>
  )
}

export default UserPlayList
