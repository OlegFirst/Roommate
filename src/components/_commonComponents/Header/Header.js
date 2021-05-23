import { useHistory } from 'react-router-dom';
import { Button, Dropdown } from 'react-bootstrap';

import { LOGO_ICON } from '../../../constants/main.js';

const Header = () => {
	const history = useHistory();
	const userName = localStorage.getItem('protect_userName');

	return (
		<header className="header">
			<img className="header__logo" src={LOGO_ICON.url} alt={LOGO_ICON.alt} />

			<div className="header__buttons">
				<Button
					className="button-outline"
					variant="outline-secondary"
					onClick={() => history.push('/advertisement')}
				>
					Main
				</Button>

				<Dropdown className="header__dropdown">
					<Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
						{userName} Styles
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="/profile">Profile</Dropdown.Item>
						<Dropdown.Item href="/create-advertisement">
							Create advertisement
						</Dropdown.Item>
						<Dropdown.Item href="/">Exit</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</header>
	);
};

export default Header;
