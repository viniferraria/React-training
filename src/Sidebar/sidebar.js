import React, { Component } from 'react';
import './sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div >
                <ul>
                    <li><a href="../Page1/page1">Page 1</a></li>
                    <li>{this.props.name}</li>
                </ul>
            </div>
        )
    }
}