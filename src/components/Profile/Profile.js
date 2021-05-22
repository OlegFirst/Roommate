import { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';

import Header from '../_commonComponents/Header/Header';
import Information from './Information/Information';
import MyRoom from './MyRoom/MyRoom';

const Profile = () => {
	const [isInformationChanges, setIsInformationChanges] = useState(false);
	const [isSaveClicked, setIsSaveClicked] = useState(false);
	
	const startChanging = () => {
		setIsInformationChanges(true);
	};
	
	const endChanging = () => {
		setIsInformationChanges(false);
		setIsSaveClicked(true);
	};
	
	// Get info from Information component
	const informationDataHandler = info => {
		if (!isSaveClicked) {
			return;
		}
		console.log('info1=', info);
	};

	// Get info from MyRoom component
	const myRoomDataHandler = info => {
		if (!isSaveClicked) {
			return;
		}
		console.log('info2=', info);
	};	
	
  return (
    <section className="profile">
			<Header />			
			
			<div className="profile__information">
				<Information
					isChanging={isInformationChanges}
					sendInfo={informationDataHandler}
				/>
			</div>
			
			<div className="profile__my-room">
				<MyRoom
					isChanging={isInformationChanges}
					sendInfo={myRoomDataHandler}
				/>
			</div>
			
		{	
			!isInformationChanges
			&&
			<footer className="profile__footer">			
				<Button className="button-outline" variant="outline-secondary" onClick={startChanging}>Change information</Button>
				<Button className="button-free" variant="outline-secondary">Exit</Button>
				<Button className="button-free" variant="outline-secondary">Delete profile</Button>		
			</footer>
		}	
		
		{
			isInformationChanges
			&&
			<footer className="profile__footer-save">				
				<Button className="button-outline" variant="outline-secondary" onClick={endChanging}>Save</Button>			
			</footer>
		}
    </section>
  );
}

export default Profile;