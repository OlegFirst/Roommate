import { useState, useRef } from 'react';
import { Button, FormControl } from 'react-bootstrap';

import Picture from '../../_commonComponents/Picture/Picture';
import ImageLoader from '../../_commonComponents/ImageLoader/ImageLoader';
import axios from '../../../func/axios';
const MyRoom = (
	{ isChanging, sendInfo, advertisement } = { advertisement: {} }
) => {
	const refLocation = useRef(null);
	const refPrice = useRef(null);
	const refSleepingPlaces = useRef(null);
	const refDescription = useRef(null);
	const [photos, setPhotos] = useState(advertisement?.photos || []);

	// const refImageLoader = useRef(null);
	const [imageLoaderShow, setImageLoaderShow] = useState(false);

	if (!isChanging && refLocation.current) {
		const res = {
			...advertisement,
			location: refLocation.current.value,
			price: refPrice.current.value,
			sleepingPlaces: refSleepingPlaces.current.value,
			description: refDescription.current.value,
			photos,
		};
		sendInfo(res);
	}
	const removePhoto = (url) => {
		setPhotos(photos.filter((u) => u !== url));
	};

	const imageLoaderClose = (info) => {
		setImageLoaderShow(false);
	};
	// Changing_(end)
	const handleUpload = (formData) => {
		axios
			.post('listing/uploadTempImage', formData)
			.then(({ data }) => {
				if (data?.data?.length) {
					setPhotos([...photos, ...data.data]);
				}
			})
			.catch(console.log)
			.then(imageLoaderClose);
	};
	return (
		<div className="my-room">
			<h3 className="my-room__title">My room</h3>

			{!isChanging && (
				<main className="my-room__main main">
					<div className="main__caption caption">
						<div className="caption__header">
							{photos[0] && (
								<div className="caption__picture">
									<Picture url={photos[0]} />
								</div>
							)}

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

					<ul className="main__pictures">
						{photos.slice(1).map((photoUrl) => (
							<li className="main__pictures-item" key={photoUrl}>
								<Picture url={photoUrl} />
							</li>
						))}
					</ul>
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
							<Button
								className="button-outline"
								variant="outline-secondary"
								onClick={() => setImageLoaderShow(true)}
							>
								Add+
							</Button>
						</div>

						<ul className="pictures__items">
							{photos.map((photoUrl) => (
								<li className="items__item item" key={photoUrl}>
									<div className="item__inner">
										<Picture url={photoUrl} />
										<span onClick={() => removePhoto(photoUrl)}>X</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</main>
			)}

			<ImageLoader
				isShow={imageLoaderShow}
				handleClose={imageLoaderClose}
				handleFormData={handleUpload}
			/>
		</div>
	);
};

export default MyRoom;
