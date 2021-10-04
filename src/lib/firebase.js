import FireBase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//import seed file
//import { seedDatabase } from '../seed';

//connect to firebase
const config = {
  apiKey: 'AIzaSyAQjlViBKOxus4_6AWDfYboouBog8Dhh-I',
  authDomain: 'instagram-c1599.firebaseapp.com',
  projectId: 'instagram-c1599',
  storageBucket: 'instagram-c1599.appspot.com',
  messagingSenderId: '28320212602',
  appId: '1:28320212602:web:3034db8082af748404fdc3',
  measurementId: 'G-W8Q7HHJ7MH',
};

const firebase = FireBase.initializeApp(config);
//access to the field values in the firebase
const { FieldValue } = FireBase.firestore;

//run the seed file to ADD DATA TO FIRESTORE
//seedDatabase(firebase);
//console.log('firebase connection done');

//export to index
export { firebase, FieldValue };
