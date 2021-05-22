import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { setAccountId, getToken } from '../../func/local-storage';

import { ADVERTISEMENT } from '../../constants/main.js';
import { serverGetAccountId } from '../../func/signUp';
import { getAllPosts, filter } from '../../func/advertisement';

import Header from '../_commonComponents/Header/Header';
import Filter from './Filter/Filter';
import Picture from '../_commonComponents/Picture/Picture';

const Advertisement = () => {
	const [apartment, setApartment] = useState([]);
	const history = useHistory();

	const token = getToken();

	useEffect(() => {
		// Get account id and all posts
		serverGetAccountId(token, ({ isSuccess, data }) => {
			if (isSuccess) {
				const accountId = data.data.accountId;
				setAccountId(accountId);

				getAllPosts(accountId, ({ isSuccess, data }) => {
					if (isSuccess) {
						setApartment(data);
					} else {
						alert('Error');
					}
				});
			}
		});
	}, []);

	const clickMoreHandler = (data) =>
		history.push({
			pathname: '/advertisement-more',
			state: data,
		});

	const filterHandler = ({ isSuccess, data }) => {
		if (!isSuccess) {
			alert("Error");
			return;
		}
		setApartment(data);
	};

	// TO DO : Photos!

	const apartmentList = apartment.map((item, index) => {
		const { location, description, sleepingPlaces } = item;
		return (
			<li className="apartments__apartment apartment" key={index}>
				<div className="apartment__picture">
					{false && <Picture url={item.photoes[0]} />}
				</div>
				<div className="apartment__text">
					<p>{location}</p>
					Number of rooms:{sleepingPlaces}. {description}
					<div>
						<Button
							className="button-line"
							variant="outline-secondary"
							onClick={() =>
								clickMoreHandler({ location, description, sleepingPlaces })
							}
						>
							More
						</Button>
					</div>
				</div>
			</li>
		);
	});

	return (
		<section className="advertisement">
			<Header />

			<main className="advertisement__main main">
				{apartment.length > 0 && (
					<ul className="advertisement__apartments apartments">
						{apartmentList}
					</ul>
				)}

				{apartment.length == 0 && (
					<ul className="advertisement__apartments apartments">EMPTY</ul>
				)}

				<div className="advertisement__filter">
					<Filter sendInfo={filterHandler} />
				</div>
			</main>
		</section>
	);
};

export default Advertisement;
