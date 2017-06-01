import React from 'react';
import Button from 'antd/lib/button';
import {withRouter} from 'react-router-dom';
import Icon from 'antd/lib/icon';
class Header extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
      let pathname = this.props.location.pathname
      console.log(this.props);
    return(
      <header>
        <Button type="default" icon="left" onClick={()=> this.props.history.goBack()}>返回</Button>
        <h2>Wumengyu</h2>
        <Icon type="tablet" />
      </header>
    )
  }
}
export default withRouter(Header)
