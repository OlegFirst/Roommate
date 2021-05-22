import Header from '../../_commonComponents/Header/Header';
import { USER, MY_ROOM } from '../../../constants/main.js';
import Picture from '../../_commonComponents/Picture/Picture';

import AdvertisementAuthor from './AdvertisementAuthor';
const AdvertisementMore = (props) => {
	const advertisementDetails = props.location.state || {};
	const { location, description, sleepingPlaces, accountId } =
		advertisementDetails;

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

	return (
		<section className="advertisement-more">
			<Header />

			<div className="advertisement-more__main-wrapper">
				<main className="advertisement-more__main main">
					<div className="main__caption caption">
						<div className="caption__header">
							<div className="caption__picture">
								<Picture url={MY_ROOM.photoes[0]} />
							</div>

							<ul className="caption__text">
								<li className="caption__text-item">Location: {location}</li>

								{false && (
									<li className="caption__text-item">Price: {MY_ROOM.price}</li>
								)}

								{false && (
									<li className="caption__text-item">
										Living space: {MY_ROOM.livingSpace} sq. m.
									</li>
								)}

								{false && (
									<li className="caption__text-item">
										Bathrooms: {MY_ROOM.bathRooms}
									</li>
								)}

								<li className="caption__text-item">
									Sleeping places: {sleepingPlaces}
								</li>
							</ul>
						</div>

						<div className="caption__description">{description}</div>
					</div>

					<ul className="main__pictures">{mainPicturesList}</ul>
				</main>

				<div className="advertisement-more__right right">
					Information about roommate:
					<AdvertisementAuthor accountId={accountId} />
				</div>
			</div>
		</section>
	);
};

export default AdvertisementMore;
