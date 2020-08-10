import React from 'react';

export default class Navbar extends React.Component<{},any> {
    constructor(){
        super('');
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
            document.body.classList.add('dark')
          }
          else {
            document.body.classList.remove('dark')
          }
      }
    render(){
        return(
            <nav className="topnav" id="myTopnav" >
                <a href="javascript;" className="pull-left">
                Where In The World?
                </a>
                <a onClick={this.onChange} className="pull-right">
                Dark Mode
                </a>
            </nav>
        )
    }
}