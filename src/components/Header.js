import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className="Header">
        <h1>
            <i className="fas fa-tasks text-info mr-2" />
            {props.title}
        </h1>
    </div>
);

export default Header;