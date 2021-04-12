import React from 'react'
import '../styles/Box.css'

const Box = ({title, desc, mainimg, img2, img3, add_more}) => {
    return (
        <div className='box'>
                <div className="box__text">
                <h2>{title}</h2>
                <p>{desc}</p>
                </div>
                <div className="box__pics">
                <img src={mainimg} alt="main"/>
                <img src={img2} alt="secondimg" />
                <img src={img3} alt="thirdimg" />
                </div>
                <div className="box__text">
                <p>{add_more}</p>
                </div>
                

        </div>
    )
}

export default Box