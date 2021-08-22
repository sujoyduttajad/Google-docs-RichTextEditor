import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5NtpxkR3tqV85-nijyw_TErJwD9dE4iM",
    authDomain: "docs-d650d.firebaseapp.com",
    projectId: "docs-d650d",
    storageBucket: "docs-d650d.appspot.com",
    messagingSenderId: "919108693715",
    appId: "1:919108693715:web:e6727d81bba62d4a7c6e26"
  };

// Here connect Firebase to the app
// Typically we use firebase.InitializeApp() function when we are using react
// but with Next.js when it is SSR sometimes it might already initialized the app 
// so in that case it ends up double initializeing the app 
// To avoid double initialization we are using the below code logic
// So if there is no app --> then pass in the firebaseConfig --> otherwise we gonna use what we already have
  const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();


// Now we will create a DB instance which will allow us to access hte firestore DB where we will store everything
  const db = app.firestore();  

  export { db };