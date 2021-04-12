//one standardized footer per page with social links
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import IconButton from '@material-ui/core/IconButton';
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css' 

const StyledFooter = styled.div`
    display: flex;
    flex-direction: row;
    height: 20vh;
    width: 100vw;
    color: #eff9f0;
    background-color: black;
`
const StyledCopyright = styled.div`
    display: flex;
    margin-left: 3%;
    margin-top: 3%;
`
const StyledIcons = styled.div`
    display: flex; 
    flex-direction: row;
`

const Footer = () => {
    return (
        <StyledFooter>
        <StyledCopyright>
        <CopyrightIcon 
        size="small">
        </CopyrightIcon>
        <h4>2021</h4>
        </StyledCopyright>
            <div className="footer__buttons">
            <StyledIcons>
            <Link to='/github'>
            <GitHubIcon 
                size="large">
            </GitHubIcon>
            </Link>
            <Link to='/linkedin'>
            <LinkedInIcon size="large"></LinkedInIcon>
            </Link>
            </StyledIcons>
            </div>
        </StyledFooter>
    )
}

export default Footer