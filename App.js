import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Detail from './components/Detail';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      class: true
    }
  }
  onChange = () => {
    if(this.state.class === true){
      this.setState({class: false});
    }
    else {
      this.setState({class: true});
    }
  }
  componentDidUpdate(){
    if(this.state.class !== true){
        const bodyElt = document.querySelector("body");
        bodyElt.classList.add('dark')
      }
      else {
        const bodyElt = document.querySelector("body");
        bodyElt.classList.remove('dark')
      }
  }
  render(){
    return (
      <main >
      <div>
        <nav class="topnav" id="myTopnav" style={{ background: this.state.background, color: this.state.color }}>
            <a href="javascript;" class="pull-left">
              Where in the world?
            </a>
             <a onClick={this.onChange} class="pull-right">
              Dark Mode
            </a> 
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Detail/:code" component={Detail} />
        </Switch>
      </div>
      </main>
    );
  }
}
export default App;
