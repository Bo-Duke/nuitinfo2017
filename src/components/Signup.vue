<template>
  <div class="loggedIn" v-if="logged">
    <p>Ce soir je serais un(e)...</p>
    <div class="sam" onClick="redirectSam"> SUPER SAM ! </div>
    <div class="alc" onClick="redirectAlc"> Personne alcoolisée </div>
  </div>
  <div class="loggedIn" v-else>
    <div class="signEmail">
      <div class="reducer">
        <div class="foo box">
          <input class="inputText"
            v-model="email"
            type="text"
            placeholder="Your Email">
        </div>
        <div v-show="!showPass" class="foo box">
          <input  class="inputText" type="password" v-model="pwd" placeholder="Your Password">
        </div>
        <div v-show="showPass" class="foo box">
          <input  class="inputText" type="text" v-model="pwd" placeholder="Your Password">
        </div>
        <div class="pwd"><input type="checkbox" v-model="showPass" name="showPass">Show password</div>
        <button @click="signin">Sign in</button>
        <a>Forgot password ?</a>
        <p> {{error}} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      logged: false,
      showPass: false,
      email: '',
      pwd: '',
      error: '',
      user: '',
    };
  },
  props: ['firebaseAuth'],
  methods: {
    signin() {
      let context = this;
      this.firebaseAuth
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    },
    mounted: function() {
      //Check is the user is already logged in, if yes redirect him to /account
      // if(this.authCurrentUser !== null) {
      //     this.$router.push('/boards')
      // }
      console.log('user', this.firebaseAuth);
    },
  },
};
</script>

<style scoped>

.loggedIn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  margin: auto;
}

.sam, .alc {
  width: 100%;
  padding: 1em;
  margin: 1em;
  cursor: pointer;
}

.sam {
  background: rgb(166, 188, 41);
}

.alc {
background: rgb(236, 65, 37);
}
</style>
