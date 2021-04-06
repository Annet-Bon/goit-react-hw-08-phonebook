import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';

import App from './App';
import './index.css';

ReactDOM.render(
	<Provider store={store.store}>
		<PersistGate loading={null} persistor={store.persistor}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
    </Provider>,
document.querySelector('#root'));