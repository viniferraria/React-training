import React, { Component } from 'react';
import './button.css';

export default class Button extends Component{
    constructor(props) {
        super(props)
        this.state = { name: this.props.name }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        alert("hello");
        if (this.state.name === 'Vini') {
            this.setState({ name: 'Thor' })
        } else {
            this.setState({ name: 'Vini' })
        }

    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.name}</button>
            </div >
        )
    }
}
