import React, { Component } from 'react';
import './image.css';
import logo from './logo.svg';
import aqua from './Aqua.jpg';
import darth from './Darth.jpg';

export default class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: this.props.photo,
            index: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        var arr = [darth, logo, aqua]
        let i = this.state.index
        if (i < arr.length) {
            this.setState({
                photo: arr[i],
                index: i + 1
            });
        } else {
            this.setState({ photo: this.props.photo, index: 0 })
        }
    }

    render() {
        return (
            <img src={this.state.photo} alt={"The mighty thor"} onClick={this.handleClick} />
        )
    }
}
