export const requestCurrentPosition = () => {
	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition(
			function(position) {
				console.log('egdee')
				console.log('Latitude is :', position.coords.latitude)
				console.log('Longitude is :', position.coords.longitude)
			},
			() => {
				console.log('hello')
			}
		)
	} else {
		console.log('Not Available')
	}
}
