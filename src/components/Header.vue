<template>
  <div>
      <h1>{{ this.$route.name }}</h1>
      <h3>Your user id: {{ this.uid }}</h3>
  </div>
</template>

<script>
import authService from '@/services/auth';
export default {
  data() {
    return {
      uid: 'uid'
    };
  },
  created() {
    setTimeout(() => {this.uid = authService.user.uid}, 200);
  }
};
</script>

<style scoped>
div {
  margin: 0;
  margin-bottom: 10px;
  padding: 5px;
  background-color: #00367c;
  color: white;
  width: 100%;
}
h1 {
  font-size: 1.4em;
  text-align: left;
  padding-left: 10px;
}
</style>
