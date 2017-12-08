<template>
  <div>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/Login';
export default {
  name: 'LoginView',
  components: { LoginComponent },
  data() {
    return {
      // show: false,
      // role: 'driver',
      // destination: {
      //   position: { lat: 43.59472239999999, lng: 1.4352956999999833 },
      // },
      // directions: false,
      // role: '',
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
  },
};
</script>

<style scoped>

</style>
