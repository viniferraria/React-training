import React, { Component } from 'react';
import './image.css';
// import logo from './logo.svg';
// import aqua from './Aqua.jpg';
// import darth from './Darth.jpg';

export default class Image extends Component{
    constructor(props){
    super(props)
        this.handleClick = this.props.handleClick
    }


render(){
    return(
        <img src={this.props.photo} alt={"The mighty thor"} onClick={this.handleClick} />
    )
    }
}
