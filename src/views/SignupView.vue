<template>
  <div>
    <SignupComponent />
  </div>
</template>

<script>
import SignupComponent from '@/components/Signup';
export default {
  name: 'SignupView',
  components: { SignupComponent },
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
