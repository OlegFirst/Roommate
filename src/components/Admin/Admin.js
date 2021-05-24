import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import Header from '../_commonComponents/HeaderAdmin/HeaderAdmin';
import Picture from '../_commonComponents/Picture/Picture';

import {
	serverGetList,
	serverDeleteApartment
} from '../../func/admin';

const Admin = () => {
	const [advertisementList, setAdvertisementList] = useState([]);
	const history = useHistory();

	// Show all apartments list from server
	const showAllApartmentList = async () => {
		const result = await serverGetList();
		if (!result.isSuccess) {
			alert('Error');
			return;
		}		
		setAdvertisementList(result.data);
	};

	useEffect(() => {
		showAllApartmentList();
	}, []);

	// Show all apartments list
	const mainClickedHandler = () => {
		showAllApartmentList();
	};

	// Delete selected apartment
	const deleteClickHandler = async (listingId) => {
		const result = await serverDeleteApartment(listingId);
		if (!result.isSuccess) {
			alert('Error');
			return;
		}
		// Component updates
		showAllApartmentList();
	};

	const apartmentList = advertisementList.map((item, index) => {
		const { listingId, location, description, photos } = item;		
		return (
			<li className="apartments__apartment apartment" key={index}>
				<div className="apartment__picture">
					{
						photos.length > 0
						&& 
						<Picture url={photos[0]} />
					}
					{
						photos.length === 0
						&& 
						<h3>No picture yet</h3>
					}
				</div>
				<div className="apartment__text">
					<p>{location}</p>
					{description}
					<div>
						<Button
							className="button-line"
							variant="outline-secondary"
							onClick={() =>
								history.push({ pathname: '/admin-more', state: { data: item } })
							}
						>
							More
						</Button>
					</div>
				</div>

				<div className="apartment__buttons">
					<Button
						className="button-brown"
						variant="outline-secondary"
						onClick={() => deleteClickHandler(listingId)}
					>
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
			<Header mainClicked={mainClickedHandler} />

			{apartmentList.length > 0 && (
				<ul className="admin__apartments apartments">{apartmentList}</ul>
			)}

			{apartmentList.length === 0 && (
				<h2 className="admin__empty-text">Empty</h2>
			)}
		</section>
	);
};

export default Admin;
