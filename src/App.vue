<template>
  <div id="app">
    <HeaderComponent />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header';
import authService from '@/services/auth'

export default {
  name: 'app',
  components: { HeaderComponent },
  data: function() {
    return {
      auth: authService,
      db: null,
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
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
