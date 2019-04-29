import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <div className="Footer">
        <p>Coded by <a href={props.link} target="_black">{props.author}</a></p>
    </div>
);

export default Footer;