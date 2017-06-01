import React from 'react'
import Footer from './footer.js'
import Header from './header.js'

const Post = ({ match }) => (
  <div>
    <div className="top  clearfix">
      <Header id={match.params.id}/>
    </div>
    <div className="bottom clearfix">
      <Footer id={match.params.id}/>
    </div>
  </div>
)

export default Post
