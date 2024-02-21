//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyA59GVFxCPj2pbtMYXPmQaqtWDOyzHQLXk",
    authDomain: "comp1800-202410-demo07-bbb6f.firebaseapp.com",
    projectId: "comp1800-202410-demo07-bbb6f",
    storageBucket: "comp1800-202410-demo07-bbb6f.appspot.com",
    messagingSenderId: "1030371313164",
    appId: "1:1030371313164:web:f596ce8194f7027ba15029"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
