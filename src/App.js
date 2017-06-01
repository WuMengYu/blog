import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import Header from './component/header.js';
import Footer from './component/footer.js';
import Post from './component/post.js';
import LeftNav from './component/leftnav.js';

import Home from './component/home.js';
import Github from './component/github.js';
import Apple from './component/apple.js';
import Person from './component/person.js';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      Mobile:true
    }
  }
  setNav(){
    document.body.clientWidth>700?this.setState({mobile:false}):
    this.setState({mobile:true})
  }
  componentWillMount(){
    this.setNav()
    window.onresize = ()=>{ this.setNav()}
  }
  render(){

    return(
      <HashRouter>
      <div className='my-wrap'>
        {this.state.mobile? <Header/> : <LeftNav/>}

            <div className='main'>
                    <Route exact path='/' component={Home}/>
                    <Route path='/github' component={Github}/>
                    <Route path='/apple' component={Apple}/>
                    <Route path='/person' component={Person}/>
                    <Route path='/post/:title' component={Post}/>
            </div>
        {this.state.mobile? <Footer/> : null}
      </div>
      </HashRouter>
    )
  }
}
export default App
