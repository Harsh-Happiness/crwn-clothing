import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBszYdC4Y-tJDTaUUtHIu85w4TP3Pad7ew",
  authDomain: "crwn-clothing-e3e36.firebaseapp.com",
  databaseURL: "https://crwn-clothing-e3e36.firebaseio.com",
  projectId: "crwn-clothing-e3e36",
  storageBucket: "crwn-clothing-e3e36.appspot.com",
  messagingSenderId: "509977989493",
  appId: "1:509977989493:web:f79e320796f2801e1c033c",
  measurementId: "G-Y9K0K8ZQ35",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (e) {
      console.error(e);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBszYdC4Y-tJDTaUUtHIu85w4TP3Pad7ew",
//     authDomain: "crwn-clothing-e3e36.firebaseapp.com",
//     databaseURL: "https://crwn-clothing-e3e36.firebaseio.com",
//     projectId: "crwn-clothing-e3e36",
//     storageBucket: "crwn-clothing-e3e36.appspot.com",
//     messagingSenderId: "509977989493",
//     appId: "1:509977989493:web:f79e320796f2801e1c033c",
//     measurementId: "G-Y9K0K8ZQ35"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
