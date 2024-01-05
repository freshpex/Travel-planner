const url = 'https://hotels-com-free.p.rapidapi.com/suggest/v1.7/json?query=San%20Francisco&locale=en_US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '040d644d14mshd1a90104a210a66p1edfabjsnc25e68304e4b',
		'X-RapidAPI-Host': 'hotels-com-free.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}