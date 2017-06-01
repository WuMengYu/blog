import React from 'react';
import {NavLink} from 'react-router-dom';
import Icon from 'antd/lib/icon';

class Footer extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){

    return(
      <footer>
        <NavLink exact activeStyle={{color:'#fff'}} to='/'><Icon type="home" /><br/>首页</NavLink>
        <NavLink activeStyle={{color:'#fff'}} to='/github'><Icon type="github" /><br/>GitHub</NavLink>
        <NavLink activeStyle={{color:'#fff'}} to='/apple'><Icon type="apple" /><br/>Apple</NavLink>
        <NavLink activeStyle={{color:'#fff'}} to='/person'><Icon type="user" /><br/>个人</NavLink>
      </footer>
    )
  }
}
export default Footer
