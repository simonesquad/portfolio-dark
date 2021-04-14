import React from 'react';
import Button from './common/Button';
import styled from 'styled-components';

// material-ui

// styled-components
const StyledNav = styled.nav`
    display: flex;
    width: 100%;
`
const Navigation = ({ oneBtnTxt, oneBtnLink, twoBtnTxt, twoBtnLink, threeBtnTxt, threeBtnLink, fourBtnTxt, fourBtnLink, fiveBtnTxt, fiveBtnLink }) => {
    return (
        <div>
            <StyledNav>
            <Button text={oneBtnTxt} link={oneBtnLink} />
            <Button text={twoBtnTxt} link={twoBtnLink} />
            <Button text={threeBtnTxt} link={threeBtnLink} />
            <Button text={fourBtnTxt} link={fourBtnLink} />
            <Button text={fiveBtnTxt} link={fiveBtnLink} />
            </StyledNav>
        </div>
    )
}

export default Navigation