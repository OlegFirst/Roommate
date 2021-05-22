import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import SignUp from '../components/Authentication/SignUp';
import SignIn from '../components/Authentication/SignIn';
import Profile from '../components/Profile/Profile';
import Advertisement from '../components/Advertisement/Advertisement';
import CreateAdvertisement from '../components/Advertisement/CreateAdvertisement/CreateAdvertisement';
import AdvertisementMore from '../components/Advertisement/AdvertisementMore/AdvertisementMore';
import Admin from '../components/Admin/Admin';

export default () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/sign-up" component={SignUp} />
			<Route exact path="/sign-in" component={SignIn} />
			<Route exact path="/profile" component={Profile} />
			<Route exact path="/advertisement" component={Advertisement} />
			<Route
				exact
				path="/create-advertisement"
				component={CreateAdvertisement}
			/>
			<Route exact path="/advertisement-more" component={AdvertisementMore} />
			<Route exact path="/admin" component={Admin} />
		</Switch>
	</Router>
);
