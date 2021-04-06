import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import * as operations from '../../redux/auth/auth-operations';
import * as selectors from '../../redux/auth/auth-selectors';
import defaultAvatar from './default-avatar.png';

import styles from './AppBar.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
    <div className={styles.container}>
        <NavLink
            to="/contacts"
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
        >
            Contacts
        </NavLink>
        <img src={avatar} alt="" width="32" />
        <span className={styles.name}>Welcome, {name}</span>
        <button
            type="button"
            onClick={onLogout}
            className={styles.btn}
        >
            Logout
        </button>
    </div>
);

const mapStateToProps = state => ({
    name: selectors.getUsername(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: operations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);