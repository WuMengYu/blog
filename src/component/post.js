import React from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import hljs from 'highlight.js';

import marked from 'marked';
console.log(marked('#nihao'));
class Post extends React.Component{
  constructor(){
    super();
    this.state = {
        data:'',
        wait:true
    }
  }
  componentDidMount(){
    let name = this.props.match.params.title;
    console.log(name);
    axios.get(`https://raw.githubusercontent.com/newming/demodata/master/blog/${name}.md`)
    .then( res=> this.setState({data:res.data, wait:false}) )
      .catch( err=> alert(err))

    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });
  }
  render(){
    console.log(this.props);

    return(
      <div style={{width:'100%'}}>
      {
        this.state.wait ? <div className="example"><Spin /></div> : <div dangerouslySetInnerHTML={{__html:marked(this.state.data)}} className='post-content'></div>
      }
      </div>
    )
  }
}
export default Post
