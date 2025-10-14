import React from 'react';


import './Button.css'

const Button = ({ children, handelClick = () => { } }) => (
    <button onClick={handelClick} className="button">{children}</button>
);

export default Button