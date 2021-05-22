import { useRef, useEffect, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';

import Header from '../../_commonComponents/Header/Header';
import ImageLoader from '../../_commonComponents/ImageLoader/ImageLoader';

import {
	getJWT
} from '../../../func/local-storage';

import {
	createAdvetritesement	
} from '../../../func/advertisement';

const CreateAdvertisement = () => {
	const refImageLoader = useRef(null);
	const [imageLoaderShow, setImageLoaderShow] = useState(false);	
	
	const token = getJWT();
	
	useEffect(() => {
		createAdvetritesement(token, ({ isSuccess, data }) => {
			if (isSuccess) {				
				console.log(data)
			} else {
				alert('Error');
			}
		})
	}, []);
	
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
					<FormControl placeholder="Input city/village" />
				</li>

				<li className="text__item">
					<span>Street:</span>
					<FormControl placeholder="Input full address" />
				</li>

				<li className="text__item">
					<span>Number of rooms:</span>
					<FormControl />
				</li>

				<li className="text__item">
					<span>Number of people to live:</span>
					<FormControl />
				</li>

				<li className="text__item">
					<span>Price:</span>
					<FormControl />
				</li>

				<li className="text__item">
					<span>Decription:</span>
					<FormControl as="textarea" />
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
					<Button className="button-outline" variant="outline-secondary">
						Create
					</Button>
				</div>
			</div>

			<ImageLoader isShow={imageLoaderShow} handleClose={imageLoaderClose} />
		</section>
	);
};

export default CreateAdvertisement;
