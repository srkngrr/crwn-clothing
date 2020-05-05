import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAQCzUxbxyh6KlUAXkeORqd1CnkplUbHxI",
    authDomain: "crwn-db-92b47.firebaseapp.com",
    databaseURL: "https://crwn-db-92b47.firebaseio.com",
    projectId: "crwn-db-92b47",
    storageBucket: "crwn-db-92b47.appspot.com",
    messagingSenderId: "62944460308",
    appId: "1:62944460308:web:824101ac6b0649a9f0f101"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`) // getting user reference
	const snapshot = await userRef.get() // getting snapshot data

	if(!snapshot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();
		
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message)
		}
	}

	return userRef
}

// Adding collection into firebase 
export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey)
	const batch = firestore.batch()
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc()
		batch.set(newDocRef, obj)
	})

	return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data()

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	})

	return transformedCollection.reduce((acc, collection) => {
		acc[collection.title.toLowerCase()] = collection
		return acc
	}, {})
} 

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider) // after this func , firebase gives us userAuth object

export default firebase;