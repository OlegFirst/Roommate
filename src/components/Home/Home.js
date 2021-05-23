import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { LOGO_ICON, HOME_PICTURES } from '../../constants/main.js';
import Picture from '../_commonComponents/Picture/Picture';

const Home = () => {
	const history = useHistory();

	return (
		<section className="home">
			<header className="home__header header">
				<div className="header__info">
					<img
						className="header__logo"
						src={LOGO_ICON.url}
						alt={LOGO_ICON.alt}
					/>
					<p className="header__text">
						The best solution for students, who want to find a place for living
					</p>
				</div>

				<div className="header__buttons">
					<Button variant="secondary" onClick={() => history.push('/sign-up')}>
						Sign Up
					</Button>
					<Button variant="secondary" onClick={() => history.push('/sign-in')}>
						Sign In
					</Button>
				</div>
			</header>

			<main className="home__main main">
				<div className="main__row">
					<div className="main__block">
						<Picture url={HOME_PICTURES[0]} />
					</div>
					<div className="main__block-text">Quickly</div>
					<div className="main__block">
						<Picture url={HOME_PICTURES[1]} />
					</div>
				</div>

				<div className="main__row">
					<div className="main__block-text">Simply</div>
					<div className="main__block">
						<Picture url={HOME_PICTURES[2]} />
					</div>
					<div className="main__block-text">Without worries</div>
				</div>
			</main>
		</section>
	);
};

export default Home;
