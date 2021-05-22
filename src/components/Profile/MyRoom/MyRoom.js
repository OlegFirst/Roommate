import { useRef } from 'react';
import { Button, FormControl } from 'react-bootstrap';

import { MY_ROOM } from '../../../constants/main.js';
import Picture from '../../_commonComponents/Picture/Picture';

const MyRoom = ({ isChanging, sendInfo }) => {
	const refLocation = useRef(null);
	const refPrice = useRef(null);
	const refSleepingPlaces = useRef(null);
	const refDescription = useRef(null);

	if (!isChanging && refLocation.current) {
		const res = {
			location: refLocation.current.value,
			price: refPrice.current.value,
			sleepingPlaces: refSleepingPlaces.current.value,
			description: refDescription.current.value,
		};
		sendInfo(res);
	}

	const mainPicturesList = MY_ROOM.photoes.map((item, index) => {
		if (index === 0) {
			return false;
		}

		return (
			<li className="main__pictures-item" key={index}>
				<Picture url={item} />
			</li>
		);
	});

	const mainChanginPicturesList = MY_ROOM.photoes.map((item, index) => {
		return (
			<li className="items__item item" key={index}>
				<div className="item__inner">
					<Picture url={item} />
					<span>X</span>
				</div>
			</li>
		);
	});

	return (
		<div className="my-room">
			<h3 className="my-room__title">My room</h3>

			{!isChanging && (
				<main className="my-room__main main">
					<div className="main__caption caption">
						<div className="caption__header">
							<div className="caption__picture">
								<Picture url={MY_ROOM.photoes[0]} />
							</div>

							<ul className="caption__text">
								<li className="caption__text-item">
									Location: {MY_ROOM.location}
								</li>

								<li className="caption__text-item">Price: {MY_ROOM.price}</li>

								<li className="caption__text-item">
									Living space: {MY_ROOM.livingSpace} sq. m.
								</li>

								<li className="caption__text-item">
									Bathrooms: {MY_ROOM.bathRooms}
								</li>

								<li className="caption__text-item">
									Sleeping places: {MY_ROOM.sleepingPlaces}
								</li>
							</ul>
						</div>

						<div className="caption__description">{MY_ROOM.description}</div>
					</div>

					<ul className="main__pictures">{mainPicturesList}</ul>
				</main>
			)}

			{isChanging && (
				<main className="my-room__main-changing main-changing">
					<ul className="main-changing__text">
						<li className="main-changing__text-item">
							<span>Location:</span>
							<FormControl ref={refLocation} />
						</li>

						<li className="main-changing__text-item">
							<span>Price:</span>
							<FormControl ref={refPrice} />
						</li>

						<li className="main-changing__text-item">
							<span>Sleeping places:</span>
							<FormControl ref={refSleepingPlaces} />
						</li>

						<li className="main-changing__text-item">
							<span>Description:</span>
							<FormControl as="textarea" ref={refDescription} />
						</li>
					</ul>

					<div className="main-changing__pictures pictures">
						<div className="pictures__header">
							<h3 className="my-room__title">Photo</h3>
							<Button className="button-outline" variant="outline-secondary">
								Add+
							</Button>
						</div>

						<ul className="pictures__items">{mainChanginPicturesList}</ul>
					</div>
				</main>
			)}
		</div>
	);
};

export default MyRoom;
