import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, FormControl } from 'react-bootstrap';

import { LOGO_ICON } from '../../constants/main.js';
import { setUserName, setToken } from '../../func/local-storage';
import { serverSingUp } from '../../func/signUp';

import Mail from '../_commonComponents/Mail/Mail';
import LockClosed from '../_commonComponents/LockClosed/LockClosed';
import LockOpened from '../_commonComponents/LockOpened/LockOpened';

// Create new account
const SignUp = () => {
	const refName = useRef(null);
	const refPassword = useRef(null);
	const refPasswordConfirm = useRef(null);

	const history = useHistory();

	const clickHandler = () => {
		const name = refName.current.value;
		const password = refPassword.current.value;
		const passwordConfirm = refPasswordConfirm.current.value;

		if (name === '' || password === '' || passwordConfirm === '') {
			alert('Some data is empty');
			return;
		}

		if (password !== passwordConfirm) {
			alert('You should type the same password');
			return;
		}

		const arg = {
			name,
			password,
		};

		serverSingUp(arg, ({ isSuccess, data }) => {
			if (isSuccess) {
				const JWT = data.data.jwt;
				setToken(JWT);
				//localStorage.setItem("protect_userName", name);
				setUserName(name);
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
					<FormControl placeholder="username" required ref={refName} />
				</div>

				<div className="form__row">
					<LockClosed />
					<FormControl
						placeholder="password"
						type="password"
						ref={refPassword}
					/>
				</div>

				<div className="form__row">
					<LockOpened />
					<FormControl
						placeholder="confirm password"
						type="password"
						ref={refPasswordConfirm}
					/>
				</div>

				<div className="form__button">
					<Button variant="secondary" onClick={clickHandler}>
						Sign Up
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
