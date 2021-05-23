import { useState, useRef } from 'react';
import { Button, FormControl } from 'react-bootstrap';

import { MY_ROOM } from '../../../constants/main.js';
import Picture from '../../_commonComponents/Picture/Picture';
import ImageLoader from '../../_commonComponents/ImageLoader/ImageLoader';

const MyRoom = (
	{ isChanging, sendInfo, advertisement } = { advertisement: {} }
) => {	
	const refLocation = useRef(null);
	const refPrice = useRef(null);
	const refSleepingPlaces = useRef(null);
	const refDescription = useRef(null);
	
	const refImageLoader = useRef(null);
	const [imageLoaderShow, setImageLoaderShow] = useState(false);
	const [pictures, setPictures] = useState([]);

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
	
	// Changing_(start)
	const mainChanginDelete = index => {
		let arg = [...pictures];
		arg.splice(index, 1);
		setPictures(arg);
	};
	
	const mainChanginPicturesList = pictures.map((item, index) => {
		return (
			<li className="items__item item" key={index}>
				<div className="item__inner">
					<Picture url={item} />
					<span onClick={() => mainChanginDelete(index)}>X</span>
				</div>
			</li>
		);
	});
	
	const imageLoaderClose = info => {
		if (!info) {
			return;
		}
		let arg = [...pictures];
		arg.push(info);
		setPictures(arg);		
		setImageLoaderShow(false);
	};
	// Changing_(end)

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
									Location: {advertisement.location}
								</li>

								<li className="caption__text-item">
									Price: {advertisement.price}
								</li>

								<li className="caption__text-item">
									Living space: {advertisement.livingSpace} sq. m.
								</li>

								<li className="caption__text-item">
									Bathrooms: {advertisement.bathRooms}
								</li>

								<li className="caption__text-item">
									Sleeping places: {advertisement.sleepingPlaces}
								</li>
							</ul>
						</div>

						<div className="caption__description">
							{advertisement.description}
						</div>
					</div>

					<ul className="main__pictures">{mainPicturesList}</ul>
				</main>
			)}

			{isChanging && (
				<main className="my-room__main-changing main-changing">
					<ul className="main-changing__text">
						<li className="main-changing__text-item">
							<span>Location:</span>
							<FormControl
								ref={refLocation}
								defaultValue={advertisement.location}
							/>
						</li>

						<li className="main-changing__text-item">
							<span>Price:</span>
							<FormControl
								ref={refPrice}
								type="number"
								defaultValue={advertisement.price}
							/>
						</li>

						<li className="main-changing__text-item">
							<span>Sleeping places:</span>
							<FormControl
								ref={refSleepingPlaces}
								type="number"
								defaultValue={advertisement.sleepingPlaces}
							/>
						</li>

						<li className="main-changing__text-item">
							<span>Description:</span>
							<FormControl
								as="textarea"
								ref={refDescription}
								defaultValue={advertisement.description}
							/>
						</li>
					</ul>

					<div className="main-changing__pictures pictures">
						<div className="pictures__header">
							<h3 className="my-room__title">Photo</h3>
							<Button className="button-outline" variant="outline-secondary" onClick={() => setImageLoaderShow(true)}>
								Add+
							</Button>
						</div>

						<ul className="pictures__items">{mainChanginPicturesList}</ul>
					</div>
				</main>
			)}
			
			<ImageLoader 
				isShow={imageLoaderShow}
				handleClose={imageLoaderClose} 
			/>
		</div>
	);
};

export default MyRoom;
