const IconSocial = props => {
	return (
		<div className="icon-social">
			<a href={props.link} target="_blank" rel="noreferrer">
				<i className={`${props.icon} fa-fw`}></i>
			</a>
		</div>
	)
}

export default IconSocial;