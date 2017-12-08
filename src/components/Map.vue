<template>
  <gmap-map
    class="gmap-map"
    ref="map"
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
  </gmap-map>
</template>

<script>
export default {
  props: ['role'],
  data() {
    return {
      center: { lat: 0, lng: 0 },
      marker: {
        position: { lat: 0, lng: 0 },
      },
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
          icon: require(`../assets/position-${this.role}.png`),
        };
        this.center = this.marker.position;
        this.$refs.map.$mapCreated.then(res => {
          const directionsService = new google.maps.DirectionsService();
          const directionsDisplay = new google.maps.DirectionsRenderer({
            map: this.$refs.map.$mapObject,
          });
          this.calculateAndDisplayRoute(
            directionsService,
            directionsDisplay,
            this.marker.position,
            { lat: 43.59472239999999, lng: 1.4352956999999833 }
          );
        });
      });
  },
  methods: {
    calculateAndDisplayRoute: (
      directionsService,
      directionsDisplay,
      pointA,
      pointB
    ) => {
      directionsService.route(
        {
          origin: pointA,
          destination: pointB,
          avoidTolls: true,
          avoidHighways: false,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          console.log(status, response);
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        }
      );
    },
  },
};
</script>

<style scoped>
.gmap-map {
  width: 100%;
  height: 450px;
}
</style>
