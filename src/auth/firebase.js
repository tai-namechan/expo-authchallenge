import firebase from 'firebase';
// import firebase from 'firebase/app';
var firebaseConfig = {
  apiKey: 'AIzaSyBnhRdmw8zEMPf1rrqsiRyxeHq4bceNh-Y',
  authDomain: 'logintry-9fc99.firebaseapp.com',
  projectId: 'logintry-9fc99',
  storageBucket: 'logintry-9fc99.appspot.com',
  messagingSenderId: '856169166658',
  appId: '1:856169166658:web:8a576746ed66149432badb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const signUp = (mailAddress, password) => {
  // Authenticationにユーザの情報を登録
  firebase
    .auth()
    .createUserWithEmailAndPassword(mailAddress, password)
    .then((user) => {
      if (user) {
        console.log('Authentication Create Success');
      }
    })
    .catch((error) => {
      console.log(error);
    });
  // firestoreにユーザー情報を登録
  firebase
    .firestore()
    .collection('users')
    .add({
      // DBに登録したい情報
      mailAddress,
      password,
    })
    .then(() => {
      console.log('Add Firestore Success');
    })
    .catch((error) => {
      console.log(error);
    });
};

// メールとパスワードでログイン
export const login = (mailAddress, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(mailAddress, password)
    .then(() => {
      alert('Login Success!');
    })
    .catch((error) => {
      alert(error.message);
    });
};

export default firebase;