import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const consfig = {
  apiKey: 'AIzaSyCd0m0NF0b8V-56W5MOd7p6bVpiWcEZG28',
  authDomain: 'moviedb-919d5.firebaseapp.com',
  databaseURL: 'https://moviedb-919d5.firebaseio.com',
  projectId: 'moviedb-919d5',
  storageBucket: '',
  messagingSenderId: '232348098303',
};

if (!firebase.apps.length) {
  firebase.initializeApp(consfig);
}

export const auth = firebase.auth();
export const database = firebase.database();
