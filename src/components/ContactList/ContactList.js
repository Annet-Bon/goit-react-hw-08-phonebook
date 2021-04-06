import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as operations from '../../redux/phonebook/phonebook-operations';
import * as selectors from '../../redux/phonebook/phonebook-selectors';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactListItem from '../ContactListItem/ContactListItem';

import styles from './contactList.module.css';

function ContactList ({ contacts, onDeleteContact }) {
    return(
        <TransitionGroup className={styles.list} component="ul">
            {contacts.map(contact => (
                <CSSTransition
                    key={contact.id}
                    timeout={250}
                    classNames={styles}
                >
                    <li className={styles.item}>
                        <ContactListItem contact={contact} onDeleteContact={onDeleteContact}/>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
};

ContactList.propTypes = {
	contacts: PropTypes.array,
    onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    contacts: selectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);