import React from 'react';

import './image.css';
export default function Image(props) {
    return (
        <img src={props.photo} alt={"The mighty thor"} />
    )
}