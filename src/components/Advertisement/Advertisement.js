import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import axios from '../../func/axios';

import Header from '../_commonComponents/Header/Header';
import Filter from './Filter/Filter';
import Picture from '../_commonComponents/Picture/Picture';

const Advertisement = (props) => {
	// const url = new URLSearchParams(props.location.search);
	// const initialSkip = Number(url.get('skip') || 0);
	const [apartment, setApartment] = useState([]);
	const [filters, setFilters] = useState({});
	const history = useHistory();
	const fetchMore = (after = 0) => {
		axios
			.post(`listing/find?skip=${after}`, filters)
			.then(({ data }) => {
				if (data.data) {
					if (after === 0) setApartment(data.data);
					else setApartment([...apartment, ...data.data]);
				}
			})
			.catch(console.warn);
	};
	useEffect(() => {
		fetchMore();
	}, [filters]);

	const clickMoreHandler = (data) =>
		history.push({
			pathname: '/advertisement-more',
			state: data
		});

	const filterHandler = (info) => {
		setFilters({
			location: info.location,
			sleepingPlacesMin: info.sleepingPlacesMin,
			priceMax: info.priceMax,
			people: info.people,
		});
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
					Number of rooms: {sleepingPlaces}.<br />
					{description}
					<div>
						<Button
							className="button-line"
							variant="outline-secondary"
							onClick={() => clickMoreHandler(item)}
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
						<Button onClick={() => fetchMore(apartment.length)}> more</Button>
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
