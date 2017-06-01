import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import Post from './post.js'
import Home from './home.js'
import './main.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const NoMatch = () => (
  <h1>404，悲剧啦</h1>
)

const Header = () => (
  <Link className="back-home" to="/">Home</Link>
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/post/:id" component={Post} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
