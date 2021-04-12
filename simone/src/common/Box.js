import React from 'react'
import '../styles/Box.css'

const Box = ({title, desc, mainimg, add_more}) => {
    return (
        <div className='box'>
                <div className="box__text">
                <h2>{title}</h2>
                <p>{desc}</p>
                </div>
                <div className="box__pic">
                <img src={mainimg} alt="main"/>
                </div>
                <div className="box__paragraph">
                <p>{add_more}</p>
                </div>
                

        </div>
    )
}

export default Box