import { useHistory } from 'react-router-dom';

import Header from '../../_commonComponents/Header/Header';
import {
	USER,
	MY_ROOM
} from '../../../constants/main.js';
import Picture from '../../_commonComponents/Picture/Picture';

const AdvertisementMore = () => {
	const history = useHistory();
	
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
								<li className="caption__text-item">
									Location: {MY_ROOM.location}
								</li>
								
								<li className="caption__text-item">
									Price: {MY_ROOM.price}
								</li>
								
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
						
						<div className="caption__description">
							{MY_ROOM.description}
						</div>
					</div>
					
					<ul className="main__pictures">
						{mainPicturesList}
					</ul>
				</main>
				
				<div className="advertisement-more__right right">
					Information about roommate:
					<div className="right__text text">
						<header className="right__header header">
							<img className="header__figure" src="images/my-room/figure_white.png" alt="Figure" />
							<div className="header__text">
								<p className="text__item">{USER.name} Style</p>
								<p className="text__item">{USER.location}</p>
							</div>
						</header>
						
						<main className="right__main">							
							<p className="main__item">Phone number: {USER.phoneNumber}</p>
							<p className="main__item">Email: {USER.eMail}</p>
						</main>
					</div>
				</div>
			</div>
			
    </section>
  );
}

export default AdvertisementMore;