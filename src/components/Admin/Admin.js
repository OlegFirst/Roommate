import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { ADVERTISEMENT } from '../../constants/main.js';
import Header from '../_commonComponents/HeaderAdmin/HeaderAdmin';
import Picture from '../_commonComponents/Picture/Picture';

import {
	serverGetList
} from '../../func/admin';

const Admin = () => {
	const [advertisementList, setAdvertisementList] = useState([]);
	const history = useHistory();
	
	const mainClickedHandler = async() => {
		const result = await serverGetList();
		console.log(result);
		if (!result.isSuccess) {
			alert('Error');
			return;
		}
		setAdvertisementList(result.data);
	};
	
	const apartmentList = advertisementList.map((item, index) => {
		const {
			listingId,
			location,
			description
		} = item;	
		return (
			<li className="apartments__apartment apartment" key={index}>
				<div className="apartment__picture">
				{false && <Picture url={item.photoes[0]} />}
				</div>
				<div className="apartment__text">
					<p>
						{location}
					</p>
						{description}
					<div>
						<Button className="button-line" variant="outline-secondary"
							onClick={() => history.push({ pathname: '/advertisement-more', state: { isAdmin: true, data: item } })}
						>
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
			<Header 
				mainClicked={mainClickedHandler}
			/>

			<ul className="admin__apartments apartments">{apartmentList}</ul>
		</section>
	);
};

export default Admin;
