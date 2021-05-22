import { Button } from 'react-bootstrap';

import { ADVERTISEMENT } from '../../constants/main.js';
import Header from '../_commonComponents/HeaderAdmin/HeaderAdmin';
import Picture from '../_commonComponents/Picture/Picture';

const Admin = () => {
	const apartmentList = ADVERTISEMENT.map((item, index) => {
		return (
			<li className="apartments__apartment apartment" key={index}>
				<div className="apartment__picture">
					<Picture url={item.photoes[0]} />
				</div>
				<div className="apartment__text">
					<p>
						{item.location} {item.street}
					</p>
					{item.description}
					<div>
						<Button className="button-line" variant="outline-secondary">
							More
						</Button>
					</div>
				</div>

				<div className="apartment__buttons">
					<Button className="button-brown" variant="outline-secondary">
						Delete
					</Button>
					<Button className="button-brown" variant="outline-secondary">
						Submit
					</Button>
				</div>
			</li>
		);
	});

	return (
		<section className="admin">
			<Header />

			<ul className="admin__apartments apartments">{apartmentList}</ul>
		</section>
	);
};

export default Admin;
