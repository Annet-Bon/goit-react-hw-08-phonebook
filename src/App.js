import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from './components/AppBar/AppBar';
import { LoaderSpinner } from './components/Loader/Loader';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import * as operations from './redux/auth/auth-operations';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /*webpackChunkName: 'home-page' */),
);

const Register = lazy(() =>
  import(
    './views/RegisterPage.js' /*webpackChunkName: 'register' */
  ),
);

const Login = lazy(() =>
  import('./views/LoginPage.js' /*webpackChunkName: 'login' */),
);

const PhoneBook = lazy(() =>
  import(
    './views/PhoneBook.js' /*webpackChunkName: 'phonebook' */
  ),
);

class App extends Component {
	static propTypes = {
		onGetCurrentUser: PropTypes.func,
	};

	componentDidMount() {
	  	this.props.onGetCurrentUser();
	}

	render() {

		return (
			<div>
				<AppBar />
				<Suspense fallback={<LoaderSpinner />}>
					<Switch>
						<PublicRoute
							exact
							path="/"
							component={HomePage}
						/>
						<PublicRoute
							path="/register"
							restricted
							redirectTo="/contacts"
							component={Register}
						/>
						<PublicRoute
							path="/login"
							restricted
							redirectTo="/contacts"
							component={Login}
						/>
						<PrivateRoute
							path="/contacts"
							redirectTo="/login"
							component={PhoneBook}
						/>
					</Switch>
        		</Suspense>
			</div>
		);
	}
};

const mapDispatchToProps = {
	onGetCurrentUser: operations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);