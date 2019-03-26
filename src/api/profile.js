import axios from 'axios';

export function submitProfile({ firstName, lastName, gender, country }, cb) {

	axios.post('/profile', { firstName, lastName, gender, country }).then(response => {
		console.log(response.data);

		cb(response);
	});
}
