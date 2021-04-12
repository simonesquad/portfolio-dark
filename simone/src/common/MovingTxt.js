// need a container for any text that I want animated... separate from other website components
import React from 'react';
import '../styles/MovingTxt.css'
import styled from 'styled-components';

//styled-components**

const StyledText = styled.p`
  position: relative;
  font-size: 1.3rem;
  color: white;
  -webkit-text-stroke: 0.025vw;
  &::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* color: black; */
    /* -webkit-text-stroke: 0vw #383d52; */
    border-right: 2px solid #eff9f0;
    overflow: hidden;
    animation: animate 6s linear infinite;
  }
  @keyframes animate {
    0%,
    10%,
    100% {
      width: 0%;
    }
    70%,
    90% {
      width: 100%;
    }
  }
`

const MovingTxt = ({animatedText}) => {
    return (
        <div className='background'>
            <div className="animated__text">
            <StyledText data-text={animatedText}>{animatedText}</StyledText>
            </div>
        </div>
    )
}

export default MovingTxt