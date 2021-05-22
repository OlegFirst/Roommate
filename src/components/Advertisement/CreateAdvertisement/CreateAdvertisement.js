import { useRef, useEffect, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';

import Header from '../../_commonComponents/Header/Header';
import ImageLoader from '../../_commonComponents/ImageLoader/ImageLoader';

import { createAdvetritesement } from '../../../func/createAdvetritesement';

const CreateAdvertisement = () => {
	const refLocation = useRef(null);
	const refStreet = useRef(null);
	const refNumberOfRooms = useRef(null);
	const refNumberPeople = useRef(null);
	const refPrice = useRef(null);
	const refDescription = useRef(null);
	// TO DO: Photos
	
	const refImageLoader = useRef(null);
	const [imageLoaderShow, setImageLoaderShow] = useState(false);
	
	// location: 'Kyiv Улица',
			// price: 5000,
			// sleepingPlaces: 1,
			// description: 'Text',
	
	const createAdvetritesementHandler = async () => {
		const data = {
			location: refLocation.current.value + ' ' + refStreet.current.value,
			price: refPrice.current.value,
			sleepingPlaces: refNumberOfRooms.current.value,
			description: refDescription.current.value
		};
		
		//console.log(data)
		
		const result = await createAdvetritesement(data);
		console.dir(result);
	};

	const one = () => {
		console.log(refImageLoader.current);
	};

	const imageLoaderClose = () => {
		setImageLoaderShow(false);
	};

	return (
		<section className="create-advertisement">
			<Header />

			<h2 className="advertisement__title">Create Advertisement</h2>

			<ul className="create-advertisement__text text">
				<li className="text__item">
					<span>Location:</span>
					<FormControl placeholder="Input city/village" ref={refLocation} />
				</li>

				<li className="text__item">
					<span>Street:</span>
					<FormControl placeholder="Input full address" ref={refStreet} />
				</li>

				<li className="text__item">
					<span>Number of rooms:</span>
					<FormControl ref={refNumberOfRooms} type="number" />
				</li>

				<li className="text__item">
					<span>Number of people to live:</span>
					<FormControl ref={refNumberPeople} type="number" />
				</li>

				<li className="text__item">
					<span>Price:</span>
					<FormControl ref={refPrice} type="number" />
				</li>

				<li className="text__item">
					<span>Decription:</span>
					<FormControl as="textarea" ref={refDescription} />
				</li>
			</ul>

			<div className="create-advertisement__pictures pictures">
				<div className="pictures__header">
					<span>Photoes:</span>
					<Button
						className="button-outline"
						variant="outline-secondary"
						onClick={() => setImageLoaderShow(true)}
					>
						Add+
					</Button>
				</div>

				<div className="pictures__footer">
					<Button
						onClick={createAdvetritesementHandler}
						className="button-outline"
						variant="outline-secondary"
					>
						Create
					</Button>
				</div>
			</div>

			<ImageLoader isShow={imageLoaderShow} handleClose={imageLoaderClose} />
		</section>
	);
};

export default CreateAdvertisement;
