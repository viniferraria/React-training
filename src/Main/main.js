import React, { Component } from 'react';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Image from '../Image/image';
import Button from '../Button/button';


class Main extends Component {
    render(){
        return(
            <div>
                <div className="Header">
                    <Header />
                </div>
                <div className="Sidebar">
                    <Sidebar name="Vini" />
                </div>
                <div className="Button">
                    <Button/>
                </div>
                <div className="bird-image">
                    <Image photo={require('./Thor.jpg')} />
                </div>
            </div>
        )
    }
}

export default Main;