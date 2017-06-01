import React from 'react';
import Button from 'antd/lib/button';

class Home extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
      
    return(
      <div className='home-wrap'>
        <div>
          <h1>HI,I am WUMENGYU</h1>
          <p>A font-end developer</p>
          <Button type="primary"><a href='https://github.com/wumengyu'>HIRE ME</a></Button>
        </div>
      </div>
    )
  }
}
export default Home
