<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// Set up firebase
const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyBNLdPrHLEnvFJUOTSrAOnvwj9yA6D0WAo',
  authDomain: 'nuitdelinfo2017-4ba50.firebaseapp.com',
  databaseURL: 'https://nuitdelinfo2017-4ba50.firebaseio.com',
  projectId: 'nuitdelinfo2017-4ba50',
  storageBucket: 'nuitdelinfo2017-4ba50.appspot.com',
  messagingSenderId: '758559307494',
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.database();

export default {
  name: 'app',
  data: function() {
    return {
      firebaseAuth: firebase.auth(),
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
