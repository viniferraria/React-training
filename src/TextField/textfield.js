import React, { Component } from 'react';
import './textfield.css';

export default class Textfield extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' }
    }

    render() {
        return (
            <textarea className={"textfield"} placeholder={"hello"}></textarea>
        )
    }
}