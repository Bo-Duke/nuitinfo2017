<template>
  <gmap-map
    class="gmap-map"
    :center="center"
    :zoom="13"
    :options="mapStyle"
  >
    <gmap-marker
      :position="marker.position"
      :icon.sync="marker.icon"
      :clickable="true"
      :draggable="false"
    ></gmap-marker>
    <gmap-user-position
  />
  </gmap-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 0, lng: 0 },
      marker: {},
      mapStyle: {
        styles: [
          {
            stylers: [
              {
                hue: '#ff1a00',
              },
              {
                invert_lightness: true,
              },
              {
                saturation: -100,
              },
              {
                lightness: 33,
              },
              {
                gamma: 0.5,
              },
            ],
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#2D333C',
              },
            ],
          },
        ],
      },
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
