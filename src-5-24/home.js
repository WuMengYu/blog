import React from 'react'
import Header from './header.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends React.Component {

  render() {
    let posts = this.props.posts
    let postArr = Object.keys(posts) // ['1', '2']
    let postList = postArr.map((item) => (
      <Header id={item}  />
    ))
    return(
      <div className="home">
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home)
