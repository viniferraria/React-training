import React, { Component } from 'react';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Image from '../Image/image';
import Button from '../Button/button';
import TextField from '../TextField/textfield';
import Thor from './Thor.jpg'

class Main extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <Header />
                </div>
                <div className="Sidebar">
                    <Sidebar name='hello' />
                </div>
                <div className="Button">
                    <Button name='Vini' />
                </div>
                <div className="bird-image">
                    <Image photo={Thor} />
                </div>
                <div className="input">
                    <TextField />
                </div>
            </div>
        )
    }
}

export default Main;
