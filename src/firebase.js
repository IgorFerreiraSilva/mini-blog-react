import app from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

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
        this.app = app.database();
        this.storage = app.storage();
    }


    login(email, password){
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    logout(){
        return app.auth().signOut();
    }

    async register(nome, email, password){
        await app.auth().createUserWithEmailAndPassword(email,password);

        const uid = app.auth().currentUser.uid;

        return app.database().ref('users').child(uid).set({
            nome: nome
        })
    }
    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve);
        })
    }

    getCurrent(){
        return app.auth().currentUser && app.auth().currentUser.email
    }

    getCurrentUid(){
        return app.auth().currentUser && app.auth().currentUser.uid
    }

}

export default new Firebase();