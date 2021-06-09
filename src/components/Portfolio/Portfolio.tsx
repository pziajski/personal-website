import "./Portfolio.scss";

export const Portfolio = () => {
	return (
		<div className="portfolio">
			<div className="portfolio__project">
				<h1 className="portfolio__project-header">Google Health Hackathon</h1>
				<p className="portfolio__project-description">description</p>
				<p className="portfolio__project-tech">Tech: Javascript, NodeJS, React, ExpressJS, SCSS</p>
				<a className="portfolio__project-link" href="https://github.com/pziajski/google-health-hackathon">Source</a>
			</div>
			<div className="portfolio__project">
				<h1 className="portfolio__project-header">PiRC - Secure Communication</h1>
				<p className="portfolio__project-description">description</p>
				<p className="portfolio__project-tech">Tech: Javascript, Typescript, NodeJS, React, MySQL (MariaDB), SCSS</p>
				<div>
					<a className="portfolio__project-link" href="https://github.com/pziajski/pirc-server">Server</a>
					<a className="portfolio__project-link" href="https://github.com/pziajski/pirc-client">Client</a>
				</div>
			</div>
			<div className="portfolio__project">
				<h1 className="portfolio__project-header">Maze Solver</h1>
				<p className="portfolio__project-description">generates a pseudo-random maze given certain rows and columns given by the user. Uses a recursive algorithm and keeps track of solution statistics.</p>
				<p className="portfolio__project-tech">Tech: Python</p>
				<a className="portfolio__project-link" href="https://github.com/pziajski/Python-Maze-Solver">Source</a>
			</div>
		</div>
	)
}