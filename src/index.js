import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

axios.defaults.baseURL = 'https://demo8409100.mockable.io';

ReactDOM.render(<App />, document.getElementById('root'));
