import { NavLink } from "react-router-dom"

const FooterLink = props => {
	return (
		<>
    		<NavLink to={props.route}>{props.name}</NavLink>
		</>
	)
}

export default FooterLink;