import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_qHGOSu25Dvsd1hs5mI8Kz3mB4jYRPho",
    authDomain: "slack-clone-e16ab.firebaseapp.com",
    databaseURL: "https://slack-clone-e16ab.firebaseio.com",
    projectId: "slack-clone-e16ab",
    storageBucket: "slack-clone-e16ab.appspot.com",
    messagingSenderId: "352265105710",
    appId: "1:352265105710:web:167a9efe5502e72b2fcabf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
