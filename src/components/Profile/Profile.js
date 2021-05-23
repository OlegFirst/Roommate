import { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';

import Header from '../_commonComponents/Header/Header';
import Information from './Information/Information';
import MyRoom from './MyRoom/MyRoom';

import {
	serverGetAccount,
	serverPutAccount,
	serverGetMyAdverts,
} from '../../func/account';
import axios from '../../func/axios';
const Profile = () => {
	const [isInformationChanges, setIsInformationChanges] = useState(false);
	const [isSaveClicked, setIsSaveClicked] = useState(false);

	const [userData, setUserData] = useState({});

	const [advertisement, setAdvertisement] = useState({});
	useEffect(() => {
		const fetchAccountData = async () => {
			const accountData = await serverGetAccount();
			if (accountData.isSuccess) setUserData(accountData.data);
		};
		const fetchAccountAdverts = async () => {
			const adverts = await serverGetMyAdverts();
			if (adverts.isSuccess) {
				if (adverts.data?.[0]) {
					setAdvertisement(adverts.data?.[0]);
				}
			}
		};
		fetchAccountData();
		fetchAccountAdverts();
	}, []);

	const startChanging = () => {
		setIsInformationChanges(true);
	};

	const endChanging = () => {
		setIsInformationChanges(false);
		setIsSaveClicked(true);
	};

	// Get info from Information component
	const informationDataHandler = (info) => {
		if (!isSaveClicked) {
			return;
		}
		setImmediate(() => setUserData(info));
		serverPutAccount(info);
	};

	// Get info from MyRoom component
	const myRoomDataHandler = (info) => {
		if (!isSaveClicked) {
			return;
		}
		const newData = { ...advertisement, ...info };
		setImmediate(() => setAdvertisement(newData));
		axios.post('listing/update', newData);
	};

	return (
		<section className="profile">
			<Header />

			<div className="profile__information">
				<Information
					userData={userData}
					isChanging={isInformationChanges}
					sendInfo={informationDataHandler}
				/>
			</div>

			<div className="profile__my-room">
				{advertisement._id ? (
					<MyRoom
						isChanging={isInformationChanges}
						sendInfo={myRoomDataHandler}
						advertisement={advertisement}
					/>
				) : (
					<b>Create New</b>
				)}
			</div>

			{!isInformationChanges && (
				<footer className="profile__footer">
					<Button
						className="button-outline"
						variant="outline-secondary"
						onClick={startChanging}
					>
						Change information
					</Button>
					<Button className="button-free" variant="outline-secondary">
						Exit
					</Button>
					<Button className="button-free" variant="outline-secondary">
						Delete profile
					</Button>
				</footer>
			)}

			{isInformationChanges && (
				<footer className="profile__footer-save">
					<Button
						className="button-outline"
						variant="outline-secondary"
						onClick={endChanging}
					>
						Save
					</Button>
				</footer>
			)}
		</section>
	);
};

export default Profile;
