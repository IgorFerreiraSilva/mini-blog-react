import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAdkm9hW-u8ayKkJUeyKFRXqTIFnm8jIXE",
    authDomain: "mini-blog-c2c59.firebaseapp.com",
    databaseURL: "https://mini-blog-c2c59.firebaseio.com",
    projectId: "mini-blog-c2c59",
    storageBucket: "mini-blog-c2c59.appspot.com",
    messagingSenderId: "933845984216",
    appId: "1:933845984216:web:b6fee879278ede2c7748ad"
  };
class Firebase{

    constructor(){
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
    }


    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    register(email){
        app.auth().createUserWithEmailAndPassword(email,password);
    }
}

export default new Firebase();