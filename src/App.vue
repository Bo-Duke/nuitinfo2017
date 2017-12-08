<template>
  <div id="app">
    <HeaderComponent />
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/Header';

export default {
  name: 'app',
  components: { HeaderComponent },
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
