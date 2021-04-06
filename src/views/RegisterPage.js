import { Component } from 'react';
import { connect } from 'react-redux';
import * as operations from '../redux/auth/auth-operations';

import styles from './RegisterPage.module.css';

class RegisterPage extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onRegister(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { name, email, password } = this.state;

        return (
        <div className={styles.wrapper} >
            <div className={styles.container}>
                <h1 className={styles.headTitle}>New User Registration</h1>

                <form
                    onSubmit={this.handleSubmit}
                    className={styles.form}
                    autoComplete="off"
                >
                    <label className={styles.label}>
                        <span className={styles.title}>Name</span>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className={styles.input}
                            onChange={this.handleChange}
                        />
                    </label>

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

                    <button className={styles.btn} type="submit">Register</button>
                </form>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = {
    onRegister: operations.register,
};

export default connect(null, mapDispatchToProps)(RegisterPage);