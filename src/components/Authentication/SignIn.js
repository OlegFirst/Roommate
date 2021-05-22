import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormControl } from 'react-bootstrap';

import { LOGO_ICON } from '../../constants/main.js';
import Mail from '../_commonComponents/Mail/Mail';
import LockClosed from '../_commonComponents/LockClosed/LockClosed';

import { setUserName, setToken } from '../../func/local-storage';
import { serverSingIn } from '../../func/signIn';

const Authentication = ({ role = 'sign-in' }) => {
	const refName = useRef(null);
	const refPassword = useRef(null);
	const refPasswordConfirm = useRef(null);

	const history = useHistory();

	const clickHandler = () => {
		const name = refName.current.value;
		const password = refPassword.current.value;

		if (name === '' || password === '') {
			alert('Some data is empty');
			return;
		}

		const arg = {
			name,
			password,
		};

		serverSingIn(arg, ({ isSuccess, data }) => {
			if (isSuccess) {
				const JWT = data.data.jwt;
				setToken(JWT);
				setUserName(name);
				//localStorage.setItem("protect_userName", name);
				history.push('/advertisement');
			} else {
				alert('Error');
			}
		});
	};

	return (
		<section className="authentication">
			<img
				className="authentication__logo"
				src={LOGO_ICON.url}
				alt={LOGO_ICON.alt}
			/>

			<div className="authentication__form form">
				<div className="form__figure">
					<img src="images/figure.png" alt="Figure" />
				</div>

				<div className="form__row">
					<Mail />
					<FormControl ref={refName} placeholder="username" />
				</div>

				<div className="form__row">
					<LockClosed />
					<FormControl
						ref={refPassword}
						type="password"
						placeholder="password"
					/>
				</div>

				<div className="form__button">
					<Button variant="secondary" onClick={clickHandler}>
						Sign In
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Authentication;
