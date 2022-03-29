import FooterLink from "./FooterLink";
import IconSocial from "./IconSocial";
import config from "../../config";
import "./styles.scss";

const Footer = () => {
    return (
        <footer id="footer">

			<div id="footer-title">
				<h1>{ config.site.name }</h1>
			</div>

            <div className="footer-separator"></div>

            <div id="footer-links">
                <div id="footer-contact">
                    <div id="footer-contact-title">
                        <h2>Contact Us</h2>
                    </div>
                    <div id="footer-contact-links">
                        { config.socials.map(social => <IconSocial key={social.name.replace(" ", "").toLowerCase()} icon={social.icon} link={social.link} />)}
                    </div>
                </div>
            </div>

            <div className="footer-separator"></div>

            <div id="footer-rights">
                <div id="footer-rights-text">
                    <p><span>All rights reserved</span><span><a href="https://teaminfernal.fr" rel="noreferrer" target="_blank">Powered by Infernal</a>, 2022</span></p>
                    <p>
                        {
                            config.footer.map(section => (
                                <span key={section.name.replace(" ", "").toLowerCase()}>
                                    <FooterLink name={section.name} route={section.route} />
                                </span>
                            ))
                        }
                    </p>
                </div>
            </div>

		</footer>
    )
}

export default Footer;