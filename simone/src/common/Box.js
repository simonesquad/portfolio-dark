import React from 'react'
import '../styles/Box.css'

const Box = ({title, desc, mainimg, img2, img3, img4, img5, add_more}) => {
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
                <img src={img4} alt="fourthimg" />
                <img src={img5} alt="fifthimg" />
                </div>
                <div className="box__bottom">
                <p>{add_more}</p>
                </div>
                

        </div>
    )
}

export default Box