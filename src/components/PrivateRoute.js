import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import * as selectors from '../redux/auth/auth-selectors';

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    redirectTo,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
        }
    />
);

const mapStateToProps = state => ({
    isAuthenticated: selectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivateRoute);