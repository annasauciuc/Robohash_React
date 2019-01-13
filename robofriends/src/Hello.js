import React, { Component } from 'react';
import './Hello.css';
class Hello extends Component {
    render() {
        return( <div className='f1 tc'> 
        <h1 >{this.props.use}</h1>
        <p>{this.props.greeting} {this.props.titleApp}</p>
        </div>)
    }
}
export default Hello;