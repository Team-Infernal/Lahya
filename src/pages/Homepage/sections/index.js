// import config from "../../../config";

const Section1 = () => {
	return (
		<section id="section-1">
			<h1>Welcome to <span className="accent-primary">Lahya</span>!</h1>
			<p className="italic">The place to find your dream job & internship.</p>
		</section>
	);
}

const Section2 = () => {
	return (
		<section id="section-2">
			<div id="section-2-text">
				<p id="section-2-text-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Nulla facilisi.</p>
				<p id="section-2-text-reco" className="bold">Recommended by Oliver Minne</p>
			</div>
			<div>
				<img src="https://via.placeholder.com/500x500" alt=""/>
			</div>
		</section>
	);
}

const Section3 = () => {
	return (
		<section id="section-3">
			<div>
				
			</div>
		</section>
	);
}

export {
	Section1,
	Section2,
}