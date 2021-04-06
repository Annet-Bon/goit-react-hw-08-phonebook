import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import * as selectors from '../redux/phonebook/phonebook-selectors';
import * as operations from '../redux/phonebook/phonebook-operations';

import styles from './PhoneBook.module.css';
import filterStyles from '../components/Filter/fadeFilter.module.css';

class PhoneBook extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        fetchContacts: PropTypes.func,
    }

    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        const { contacts } = this.props;

        return (
			<div className={styles.contain}>
				<div>
				<CSSTransition
					in={true}
					appear
					timeout={500}
					classNames={styles}
				>
					<h1 className={styles.title}>Phonebook</h1>
				</CSSTransition>

				<ContactForm />
				</div>
				{contacts.length === 0
				? <p className={styles.nothing}>There are no contacts :((</p>
				: (
					<div>
						<h2 className={styles.title}>Contacts</h2>
						<CSSTransition
							in={contacts.length > 1}
							timeout={500}
							classNames={filterStyles}
							unmountOnExit
						>
							<Filter />
						</CSSTransition>

						<ContactList />
					</div>
                )}
			</div>
		);
    }
}

const mapStateToProps = state => ({
    contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneBook);