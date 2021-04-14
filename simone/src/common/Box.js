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
                <img width="220" height="420" 
                src={mainimg} alt="main"/>
                <img width="220" height="420"
                src={img2} alt="secondimg" />
                <img width="220" height="420"
                src={img3} alt="thirdimg" />
                <img width="220" height="420"
                src={img4} alt="fourthimg" />
                <img width="220" height="420"
                src={img5} alt="fifthimg" />
                </div>
                <div className="box__bottom">
                <p>{add_more}</p>
                </div>
                

        </div>
    )
}

export default Box