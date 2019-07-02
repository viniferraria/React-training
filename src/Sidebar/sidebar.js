import React, { Component } from 'react';
import './sidebar.css';

export default class Sidebar extends Component{
    constructor(props) {
        super(props)
        this.state = { name: 'v' }
    }

    render() {
        let name = this.props.name;
        if (name !== this.state.name) {
            this.setState({ name: name });
        }
        return (
            <div>
                <ul>
                    <li><a href="../Page1/page1" onClick={this.handleClick}>Page 1</a></li>
                    <li>{this.state.name}</li>
                </ul>
            </div>
        )
    }
}