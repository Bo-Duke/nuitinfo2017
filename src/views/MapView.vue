<template>
  <div>
    <input v-model="role" placeholder="role" />
    <button @click="toggleShow">Go</button>
    <MapComponent v-if="show" :role="role" :destination="destination" :directions="directions"/>
  </div>
</template>

<script>
import MapComponent from '@/components/Map';
export default {
  name: 'MapView',
  components: { MapComponent },
  data() {
    return {
      show: false,
      role: 'driver',
      destination: {
        position: { lat: 43.59472239999999, lng: 1.4352956999999833 },
      },
      directions: false,
      role: '',
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
