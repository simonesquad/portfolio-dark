import React from 'react'
import '../styles/OnePic.css'

const OnePic = ({title, desc, mainimg}) => {
    return (
        <div className='one'>
                <div className="one__text">
                <h2>{title}</h2>
                <p>{desc}</p>
                </div>
                <div className="one__pics">
                <img src={mainimg} alt="main"/>
                </div> 

        </div>
    )
}

export default OnePic