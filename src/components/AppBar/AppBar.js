import { connect } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import * as selectors from '../../redux/auth/auth-selectors';

import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => (
	<header className={styles.header}>
		<Navigation />
		{isAuthenticated ? <UserMenu /> : <AuthNav />}
	</header>
);

const mapStateToProps = state => ({
  	isAuthenticated: selectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);