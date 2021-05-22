import { useRef } from 'react';
import { FormControl, Button } from 'react-bootstrap';

const Filter = ({ sendInfo }) => {
	const refCity = useRef(null);
	const refRooms = useRef(null);
	const refPrice = useRef(null);
	const refPeople = useRef(null);

	const findClicked = () => {
		const data = {
			location: refCity.current.value,
			sleepingPlacesMin: refRooms.current.value,
			priceMax: refPrice.current.value,
			people: refPeople.current.value,
		};
		sendInfo(data);
	};

	return (
		<ul className="filter">
			<li className="filter__item">
				<span className="filter__text">Which city?</span>
				<FormControl ref={refCity} />
			</li>

			<li className="filter__item">
				<span className="filter__text">How many rooms?</span>
				<FormControl ref={refRooms} type="number" />
			</li>

			<li className="filter__item">
				<span className="filter__text">What about price?</span>
				<FormControl ref={refPrice} type="number" />
			</li>

			<li className="filter__item">
				<span className="filter__text">How many people?</span>
				<FormControl ref={refPeople} type="number" />
			</li>

			<li className="filter__item filter__button-wrapper">
				<Button
					className="button-brown"
					variant="outline-secondary"
					onClick={findClicked}
				>
					find
				</Button>
			</li>
		</ul>
	);
};

export default Filter;
