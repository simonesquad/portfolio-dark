import React from 'react'
import '../styles/TextBox.css'

const TextBox = ({title, text1, text2}) => {
    return (
        <div className='textbox'>
            <div className="top__text">
                <h2>{title}</h2>
                <p>{text1}</p>
            </div>
            <div className="bottom__text">
                <p>{text2}</p>
            </div>
        </div>
    )
}

export default TextBox