import firebase from 'firebase'

export const initializeFirebase = () => {
	firebase.initializeApp({
		apiKey: 'AIzaSyC-SvciFW4BeRXho3kzGusvHYakjevsvjA',
		authDomain: 'principal-sonar-184611.firebaseapp.com',
		databaseURL: 'https://principal-sonar-184611.firebaseio.com',
		projectId: 'principal-sonar-184611',
		storageBucket: 'principal-sonar-184611.appspot.com',
		messagingSenderId: '937626806183',
		appId: '1:937626806183:web:805f0c123360e93829f882'
	})
	navigator.serviceWorker.register('/serviceWorker.js').then(registration => {
		firebase.messaging().useServiceWorker(registration)
	})
}

export const askForPermissioToReceiveNotifications = async () => {
	try {
		const messaging = firebase.messaging()
		await messaging.requestPermission()
		const token = await messaging.getToken()
		console.log(token)


		return token
	} catch (error) {
		console.log(error)
	}
}
