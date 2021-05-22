import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import {	
	ADVERTISEMENT
} from '../../constants/main.js';
import {
	setAccountId	
} from '../../func/local-storage';

import { serverGetAccountId } from '../../func/signUp';
import { getAllPosts } from '../../func/advertisement';

import Header from '../_commonComponents/Header/Header';
import Filter from './Filter/Filter';
import Picture from '../_commonComponents/Picture/Picture';

const Advertisement = () => {
	const [apartment, setAapartment] = useState([]);
	const history = useHistory();
	
	useEffect(() => {
		const token = localStorage.getItem("protect_JWT");
		
		// Get account id and all posts
		serverGetAccountId(token, ({ isSuccess, data }) => {
			if (isSuccess) {
				const accountId = data.data.accountId;				
				setAccountId(accountId);
				
				getAllPosts(accountId, ({ isSuccess, data }) => {			
					if (isSuccess) {				
						console.log(data)
					} else {
						alert('Error');
					}
    });		
			}
		});
	}, []);
	
	const filterHandler = (info) => {
		console.log(info);
	};
	
	const apartmentList = ADVERTISEMENT.map((item, index) => {		
		return (
			<li className="apartments__apartment apartment" key={index}>
				<div className="apartment__picture">
					<Picture url={item.photoes[0]} />
				</div>
				<div className="apartment__text">
					<p>{item.location} {item.street}</p>					
					{item.description}
					<div>
						<Button className="button-line" variant="outline-secondary" onClick={() => history.push('/advertisement-more')}>More</Button>
					</div>
				</div>
			</li>
		);
	});

  return (
    <section className="advertisement">
			<Header />
			
			<main className="advertisement__main main">
			{
				apartment.length > 0
				&&
				<ul className="advertisement__apartments apartments">
					{apartmentList}
				</ul>
			}
			
			{
				apartment.length == 0
				&&
				<ul className="advertisement__apartments apartments">
					EMPTY
				</ul>
			}
				
				<div className="advertisement__filter">
					<Filter sendInfo={filterHandler} />
				</div>
			</main>
    </section>
  );
}

export default Advertisement;