import { Button, Dropdown } from 'react-bootstrap';

import { LOGO_ICON, USER } from '../../../constants/main.js';

const HeaderAdmin = () => {
	return (
		<header className="header-admin">
			<img
				className="header-admin__logo"
				src={LOGO_ICON.url}
				alt={LOGO_ICON.alt}
			/>

			<div className="header-admin__buttons">
				<Button className="button-outline" variant="outline-secondary">
					Main
				</Button>
				<Button className="button-outline" variant="outline-secondary">
					Requests
				</Button>

				<Dropdown className="header-admin__dropdown">
					<Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
						Admin
					</Dropdown.Toggle>
					<Dropdown.Menu>
						<Dropdown.Item href="#">Exit</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</header>
	);
};

export default HeaderAdmin;
