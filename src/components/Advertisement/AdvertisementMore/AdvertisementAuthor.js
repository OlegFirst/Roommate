import { useEffect, useState } from 'react';
import axios from '../../../func/axios';
const AdvertisementAuthor = (props) => {
	const [userData, setUserData] = useState({});
	useEffect(() => {
		if (props.accountId) {
			axios
				.get(`account/${props.accountId}`)
				.then((response) => {
					if (response.data?.data) setUserData(response.data?.data);
				})
				.catch(console.log);
		}
	}, []);
	return (
		<div className="right__text text">
			<header className="right__header header">
				<img
					className="header__figure"
					src="images/my-room/figure_white.png"
					alt="Figure"
				/>
				<div className="header__text">
					<p className="text__item">{userData.name}</p>
					{userData.location && (
						<p className="text__item">{userData.location}</p>
					)}
				</div>
			</header>

			<main className="right__main">
				{userData.phoneNumber && (
					<p className="main__item">Phone number: {userData.phoneNumber}</p>
				)}
				{userData.eMail && (
					<p className="main__item">Email: {userData.eMail}</p>
				)}
			</main>
		</div>
	);
};
export default AdvertisementAuthor;
