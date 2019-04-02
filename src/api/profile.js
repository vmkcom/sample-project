import axios from 'axios';

axios.defaults.baseURL = 'https://demo8409100.mockable.io';

export function submitProfile({ firstName, lastName, gender, country }, cb) {

	return axios.post('/profile', { firstName, lastName, gender, country }).then(response => {
		console.log(response.data);

		cb(response);
	});
}
