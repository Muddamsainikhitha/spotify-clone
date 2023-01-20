import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Playlists from './components/Playlists'
import Favourite from './components/Favourite'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/Playlists" component={Playlists} />
    <Route exact path="/Favourite" component={Favourite} />
  </Switch>
)

export default App
