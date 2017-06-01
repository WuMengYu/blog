import React from 'react';
import store from './redux/store.js';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
      store.dispatch({type:'INCREMENT_LIKES', postId: this.props.id})
  }
  render(){
    return(
        <div className="post-body">
          <Link to={`/post/${this.props.id}`} className="title">
               {this.props.posts[this.props.id].title}
          </Link>

          <div onClick={this.handleClick} className="likes-num num">
            {this.props.posts[this.props.id].likes} 赞
          </div>
          <div className="comment-num num">
            {this.props.comments[this.props.id].length} 评论
          </div>
        </div>

    )
  }
}
  const mapStateToProps = (state) => ({
      comments:state.comments,
      posts:state.posts
    })
export default connect(mapStateToProps)(Header)
