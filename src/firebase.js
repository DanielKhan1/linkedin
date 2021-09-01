import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDgo5FBS_bR4c3n6c3px_jtEZe0bdADHgA",
    authDomain: "linkedin-clone-9365f.firebaseapp.com",
    projectId: "linkedin-clone-9365f",
    storageBucket: "linkedin-clone-9365f.appspot.com",
    messagingSenderId: "173596040093",
    appId: "1:173596040093:web:33e16a0f3605309f576d74"
  }

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }
  