import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBNLdPrHLEnvFJUOTSrAOnvwj9yA6D0WAo',
  authDomain: 'nuitdelinfo2017-4ba50.firebaseapp.com',
  databaseURL: 'https://nuitdelinfo2017-4ba50.firebaseio.com',
  projectId: 'nuitdelinfo2017-4ba50',
  storageBucket: 'nuitdelinfo2017-4ba50.appspot.com',
  messagingSenderId: '758559307494',
};

firebase.initializeApp(config);

const authService = {
  firebase,
  user: null,

  authenticated() {
    if (this.user == null) {
      return false;
    } else {
      return !this.user.isAnonymous;
    }
  },

  setUser(user) {
    this.user = user;
  },

  login(email, password, redirect) {
    return this.firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setUser(user);
        redirect();
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          this.firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
              this.setUser(user);
              redirect();
            });
        }
      });
  },

  logout() {
    this.firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('logout done');
      });
  },
};

firebase.auth().onAuthStateChanged(user => {
  authService.setUser(user);
});

export default authService;
