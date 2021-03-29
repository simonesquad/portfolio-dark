//one standardized footer per page with social links
import React from 'react';
import styled from 'styled-components';
// import IconButton from '@material-ui/core/IconButton';
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

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
    flex-direction: column;
    margin-left: 3%; 
    margin-top: 3%;
`
const StyledIcon = styled.div`
    display: flex;
    padding-bottom: 7%;
`
//paragraph elements temporary until I can figure out how to do external links with icon buttons

const Footer = () => {
    return (
        <StyledFooter>
        <StyledCopyright>
        <CopyrightIcon size="small"></CopyrightIcon>
        <h4>2021</h4>
        </StyledCopyright>
        <StyledIcons>
            <StyledIcon>
            <GitHubIcon size="large"></GitHubIcon>
            <p>simonesquad</p>
            </StyledIcon>
            <StyledIcon>
            <LinkedInIcon size="large"></LinkedInIcon>
            <p>simoneaballard</p>
            </StyledIcon>
        </StyledIcons>
        </StyledFooter>
    )
}

export default Footer