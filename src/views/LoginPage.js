import { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import * as operations from '../redux/auth/auth-operations';

import styles from './RegisterPage.module.css';

class LoginPage extends Component {
    static propTypes = {
        onLogin: PropTypes.func,
    };

    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.headTitle}>Entrance to the personal account</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={styles.form}
                    // autoComplete="off"
                >
                    <label className={styles.label}>
                        <span className={styles.title}>Email</span>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className={styles.label}>
                        <span className={styles.title}>Password</span>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                    </label>

                    <button className={styles.btn} type="submit">Log In</button>
                </form>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = {
    onLogin: operations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);