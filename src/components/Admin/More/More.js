import { useHistory } from 'react-router-dom';
import Header from '../../_commonComponents/HeaderAdmin/HeaderAdmin';
import Picture from '../../_commonComponents/Picture/Picture';

import AdvertisementAuthor from '../../Advertisement/AdvertisementMore/AdvertisementAuthor';
const AdvertisementMore = (props) => {
	const advertisementDetails = props.location.state || {};
	
	const {
		location,
		description,
		sleepingPlaces,
		price,
		accountId,
		photos,
		bedrooms,
		livingSpace,
	} = advertisementDetails.data;
	
	const mainPicturesList = photos?.slice(1).map((item, index) => {
		return (
			<li className="main__pictures-item" key={index}>
				<Picture url={item} />
			</li>
		);
	});
	
	const history = useHistory();
	
	const mainClickedHandler = () => {
		history.push('/admin');
	};

	return (
		<section className="advertisement-more">		
			<Header
				mainClicked={mainClickedHandler}
			/>

			<div className="advertisement-more__main-wrapper">
				<main className="advertisement-more__main main">
					<div className="main__caption caption">
						<div className="caption__header">
							<div className="caption__picture">
								{photos?.[0] && <Picture url={photos[0]} />}
							</div>

							<ul className="caption__text">
								<li className="caption__text-item">Location: {location}</li>

								<li className="caption__text-item">Price: {price}</li>

								{livingSpace && (
									<li className="caption__text-item">
										Living space: {livingSpace} sq. m.
									</li>
								)}

								{bedrooms && (
									<li className="caption__text-item">bedrooms: {bedrooms}</li>
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
