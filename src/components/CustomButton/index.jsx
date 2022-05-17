import React, { } from 'react';
import './style.css';
export function CustomButton({color, message, onClick, isSale = false}) {
    
    return (    
        <button style={{backgroundColor: color}} onClick={onClick}>
            <img alt='이미지' src={isSale === true ? require("../../assets/sale_icon.png") : require("../../assets/pale_icon.png")} />
            <p>{message}</p>
        </button>
    )
}
