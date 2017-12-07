<template>
  <gmap-map
    class="gmap-map"
    :center="center"
    :zoom="13"
  >
    <gmap-marker
      :position="marker.position"
      :icon.sync="marker.icon"
      :clickable="true"
      :draggable="false"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 0, lng: 0 },
      marker: {},
    };
  },

  mounted() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(data => {
        this.marker = {
          position: { lat: data.coords.latitude, lng: data.coords.longitude },
          icon: require('../assets/position.png'),
        };
        this.center = this.marker.position;
      });
  },
};
</script>

<style scoped>
.gmap-map {
  width: 100%;
  height: 450px;
}
</style>
