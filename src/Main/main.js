import React, { Component } from 'react';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Image from '../Image/image';
import Button from '../Button/button';
import TextField from '../TextField/textfield';
import Thor from './Thor.jpg'
import logo from '../Image/logo.svg';
import aqua from '../Image/Aqua.jpg';
import darth from '../Image/Darth.jpg';

class Main extends Component {
    constructor(props){
    super(props)
        this.state = {
        photo: Thor,
        index: 0,
        array: [darth, logo, aqua]
        }
    this.handleClick = this.handleClick.bind(this)
    }

handleClick = () => {
    var arr = this.state.array
    let i = this.state.index
    if(i < arr.length){
        this.setState({photo: arr[i], index: i+1})
    } else {
        this.setState({photo: this.props.photo, index: 0})
    }
}

render(){
    return(
    <div>
        <div className="Header">
            <Header />
        </div>
        <div className="Sidebar">
            <Sidebar name='hello'/>
        </div>
        <div className="Button">
            <Button name='Vini'/>
        </div>
        <div className="bird-image">
            <Image photo={Thor} onClick={this.handleClick} />
        </div>
        <div className="input">
            <TextField/>
        </div>
    </div>
        )
    }
}

export default Main;
