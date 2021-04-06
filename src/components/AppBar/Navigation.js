import { NavLink } from 'react-router-dom';

import styles from './AppBar.module.css';

const Navigation = () => (
    <nav>
        <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Home Page
        </NavLink>
    </nav>
);

export default Navigation;