//one standardized footer per page with social links
import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css' 

const Footer = () => {
    return (
        <div className="footer">
        <div className="footer__copyright">
        <CopyrightIcon 
            fontSize="small" />
        <h4>2021 | </h4>
        <h4> | Simone Ballard</h4>
        </div>
            <div className="footer__icons">
            <a rel="noreferrer" href="https://www.github.com/simonesquad" target="_blank">
            <GitHubIcon 
                fontSize="small" />
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/simoneaballard" target="_blank">
            <LinkedInIcon 
                fontSize="small" />
            </a>
            </div>
        </div>
    )
}

export default Footer