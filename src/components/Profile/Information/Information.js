import { useRef } from 'react';
import { FormControl } from 'react-bootstrap';

const Information = ({ isChanging, sendInfo, userData } = { userData: {} }) => {
	const refLocation = useRef(null);
	const refDateOfBirth = useRef(null);
	const refPhoneNumber = useRef(null);
	const refEMail = useRef(null);

	if (!isChanging && refLocation.current) {
		const res = {
			...userData, // keep .name
			location: refLocation.current.value,
			dateOfBirth: refDateOfBirth.current.value,
			phoneNumber: refPhoneNumber.current.value,
			eMail: refEMail.current.value,
		};

		sendInfo(res);
	}

	return (
		<div className="information">
			<img
				className="information__figure"
				src="images/my-room/figure_white.png"
				alt="Figure"
			/>

			{!isChanging && (
				<div className="information__text text">
					<h2 className="text__title">{userData.name}</h2>
					<ul className="text__items">
						<li className="text__item">{userData.location}</li>
						<li className="text__item">{userData.dateOfBirth}</li>
						<li className="text__item">{userData.phoneNumber}</li>
						<li className="text__item">{userData.eMail}</li>
					</ul>
				</div>
			)}

			{isChanging && (
				<div className="information__text text">
					<h2 className="text__title">{userData.name} Style</h2>
					<ul className="text__items">
						<li className="text__item">
							<span>Location:</span>
							<FormControl ref={refLocation} defaultValue={userData.location} />
						</li>

						<li className="text__item">
							<span>Date of birth:</span>
							<FormControl
								ref={refDateOfBirth}
								defaultValue={userData.dateOfBirth}
							/>
						</li>

						<li className="text__item">
							<span>Phone number:</span>
							<FormControl
								ref={refPhoneNumber}
								defaultValue={userData.phoneNumber}
							/>
						</li>

						<li className="text__item">
							<span>Email:</span>
							<FormControl ref={refEMail} defaultValue={userData.eMail} />
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Information;
