import { NavLink } from 'react-router-dom';

import styles from './AppBar.module.css';

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Registration
        </NavLink>
        <NavLink
            to="/login"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Log In
        </NavLink>
    </div>
);

export default AuthNav;