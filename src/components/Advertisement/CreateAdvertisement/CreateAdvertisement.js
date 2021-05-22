import { useRef, useEffect, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
// import {
// ADVERTISEMENT
// } from '../../constants/main.js';
import Header from '../../_commonComponents/Header/Header';
import ImageLoader from '../../_commonComponents/ImageLoader/ImageLoader';

const CreateAdvertisement = () => {
	const refImageLoader = useRef(null);
	const [imageLoaderShow, setImageLoaderShow] = useState(false);

	//const imageToBase64 = require('image-to-base64');

	const one = () => {
		console.log(refImageLoader.current);
	};

	// imageToBase64('./image1.jpg')
	// .then(
	// response => {
	// console.log(response);
	// }
	// )
	// .catch(
	// error => {
	// console.log(error);
	// }
	// )

	// useEffect(() => {
	// console.clear();

	// refImageLoader.current.addEventListener('change', function() {
	// if (this.files && this.files[0]) {
	// let image = document.querySelector('#myImg');
	// image.onload = () => {
	// URL.revokeObjectURL(image.src);
	// }
	// image.src = URL.createObjectURL(this.files[0]);
	// }
	// });
	// }, []);

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
