import { useRef } from 'react';
import { FormControl } from 'react-bootstrap';

import {
	USER
} from '../../../constants/main.js';

const Information = ({ isChanging, sendInfo }) => {
	const refLocation = useRef(null);
	const refDateOfBirth = useRef(null);
	const refPhoneNumber = useRef(null);
	const refEMail = useRef(null);
	
	if (!isChanging && refLocation.current) {
		const res = {
			location: refLocation.current.value,
			dateOfBirth: refDateOfBirth.current.value,
			phoneNumber: refPhoneNumber.current.value,
			eMail: refEMail.current.value
		};		
		sendInfo(res);		
	}
	
  return (
    <div className="information">
			<img className="information__figure" src="images/my-room/figure_white.png" alt="Figure" />
			
		{
			!isChanging	
			&&
			<div className="information__text text">
				<h2 className="text__title">{USER.name} Style</h2>
				<ul className="text__items">					
					<li className="text__item">{USER.location}</li>
					<li className="text__item">{USER.dateOfBirth}</li>
					<li className="text__item">{USER.phoneNumber}</li>
					<li className="text__item">{USER.eMail}</li>
				</ul>
			</div>
		}
			
		{
			isChanging
			&&
			<div className="information__text text">
				<h2 className="text__title">{USER.name} Style</h2>
				<ul className="text__items">					
					<li className="text__item">
						<span>Location:</span>
						<FormControl ref={refLocation} />
					</li>
					
					<li className="text__item">
						<span>Date of birth:</span>
						<FormControl ref={refDateOfBirth} />
					</li>
					
					<li className="text__item">
						<span>Phone number:</span>
						<FormControl ref={refPhoneNumber} />
					</li>
					
					<li className="text__item">
						<span>Email:</span>
						<FormControl ref={refEMail} />
					</li>
				</ul>
			</div>
		}
    </div>
  );
}

export default Information;