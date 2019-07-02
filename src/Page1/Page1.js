import React, { Component } from 'react';
import Image from '../Image/image';


class Page1 extends Component {
    render() {
        return (
            <div>
                <div className="Header">
                    <Header />
                </div>
                <div className="Sidebar">
                    <Sidebar name="Thor" />
                </div>
                <div className="Button">
                    <Button />
                </div>
                <div className="bird-image">
                    <Image photo={require('./logo.svg')} />
                </div>
            </div>
        )
    }
}

export default Page1