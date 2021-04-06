import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../redux/phonebook/phonebook-actions';
import * as selectors from '../../redux/phonebook/phonebook-selectors';

import styles from './filter.module.css';

function Filter ({ value, onChangeFilter }) {
    return (
        <div className={styles.filter}>
            <p className={styles.title}>Find contacts by name</p>
            <input
                className={styles.filterInput}
                name="filter"
                onChange={onChangeFilter}
                value={value}
            />
        </div>
    );
};

Filter.propTypes = {
	value: PropTypes.string.isRequired,
    onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: selectors.getFilter(state),
    // contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
    onChangeFilter: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);