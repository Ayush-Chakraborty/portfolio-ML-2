import React from "react";
import "./footer.css";
import SectionHeading from "../UI/sectionHeading/SectionHeading";
import EmailIcon from "@mui/icons-material/Email";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
function Footer() {
    return (
        <footer id="contact">
            <SectionHeading className="footer__section">Contact</SectionHeading>
            <div className="footer__body">
                <div className="footer__mail">
                    <h2>Send me an email</h2>
                    <p>soumyadippayra-at-gmail-dot-com</p>
                </div>
                <div className="footer_socialMedia">
                    <a
                        href="mailto: soumyadippayra@gmail.com"
                        className="footer__sm__element"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <EmailIcon className="footer__icon" />
                        Mail
                    </a>
                    {/* <a href="https://www.linkedin.com/in/soumyadip-p-518751100/" className="footer__sm__element" target="_blank" rel="noreferrer">
                        <LinkedInIcon className="footer__icon"/>
                        LinkedIn
                    </a> */}
                    <a
                        href="https://github.com/Soumya296"
                        className="footer__sm__element"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GitHubIcon className="footer__icon" />
                        GitHub
                    </a>
                    <a
                        href="https://www.facebook.com/soumyadip.payra"
                        className="footer__sm__element"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FacebookRoundedIcon className="footer__icon" />
                        Facebook
                    </a>
                </div>
            </div>
            <p className="footer__ack">Designed & developed by Ayush Chakraborty</p>
        </footer>
    );
}

export default Footer;
