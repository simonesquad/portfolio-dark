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
    margin-left: 1%;
    margin-top: 7%;
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
        <h4>2021 | </h4>
        <h4> | Simone Ballard</h4>
        </StyledCopyright>
            <div className="footer__buttons">
            <StyledIcons>
            <Link to={{ pathname: "www.github.com/simonesquad"}} target="_blank">
            <GitHubIcon size="large" />
            </Link>
            <Link to={{ pathname: "www.linkedin.com/in/simoneaballard" }} target="_blank">
            <LinkedInIcon size="large" />
            </Link>
            </StyledIcons>
            </div>
        </StyledFooter>
    )
}

export default Footer