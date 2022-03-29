import olivier from "./olivier_minne.jpg";

export const Section1 = () => {
	return (
		<section id="section-1">
			<h1>Welcome to <span className="accent-primary">Lahya</span>!</h1>
			<p className="italic">The place to find your dream job & internship.</p>
		</section>
	);
}

export const Section2 = () => {
	return (
		<section id="section-2">
			<div id="section-2-text">
				<p id="section-2-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi.</p>
				<p id="section-2-text-reco" className="bold">Recommended by Olivier Minne</p>
			</div>
			<div>
				<img src={olivier} alt=""/>
			</div>
		</section>
	);
}

export const Section3 = () => {
	return (
		<section id="section-3">
			<div id="section-3-carousel">
				<img src="https://via.placeholder.com/1200x675" alt=""/>
				<div id="section-3-carousel-buttons">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</section>
	);
}

export const Section4 = () => {
	return (
		<section id="section-4">
			<div id="section-4-students">
				<h3>For <span className="accent-primary">students</span>...</h3>
				<div className="section-4-details">
					<i className="fas fa-graduation-cap fa-fw accent-secondary"></i>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi.</p>
				</div>
			</div>
			<div id="section-4-pros">
				<h3>...<span className="accent-primary">professionals</span>...</h3>
				<div className="section-4-details">
					<i className="fas fa-user-tie fa-fw accent-secondary"></i>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi.</p>
				</div>
			</div>
			<div id="section-4-partners">
				<h3>and <span className="accent-primary">partners</span>!</h3>
				<div className="section-4-details">
					<i className="fas fa-handshake fa-fw accent-secondary"></i>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi.</p>
				</div>
			</div>
		</section>
	);
}