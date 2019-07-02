import React, { Component } from 'react';
import './button.css';

export default class Button extends Component{
    
    handleClick = () => {
        alert("hello");
    }
    
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Confirm</button>
            </div >
        )
    }
}
