import { NavLink } from "react-router-dom"

const NavbarLink = props => {
	return (
        <NavLink to={props.route}>{props.name}</NavLink>
    )
}

export default NavbarLink;