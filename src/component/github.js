import React from 'react';
import axios from 'axios';
import { Card } from 'antd';
import { Spin } from 'antd';
import {Link} from 'react-router-dom';
class Github extends React.Component{
  constructor(){
    super();
    this.state = {
      data:[],
      wait:true
    }
  }
  componentWillMount(){
    axios.get('https://raw.githubusercontent.com/newming/demodata/master/duopingshidai.json')
      .then( res=> this.setState({data:res.data, wait:false}) )
        .catch( err=> alert(err))
  }
  render(){

    return(
      <div style={{padding:'20px'}} className='git'>
      {
        this.state.wait ? <div className="example"><Spin /></div> :
        this.state.data.map(item=>(
          <Card key={item.index} title={item.title} extra={<Link to={`/post/${item.url}`}>阅读更多</Link>}
           style={{marginBottom:'10px'}}>
            <p>{item.desc}</p>
          </Card>
        ))
      }
      </div>
    )
  }
}
export default Github
