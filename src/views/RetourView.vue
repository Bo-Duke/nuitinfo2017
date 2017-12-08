<template>
  <div>
    <div>
        <h2>Retour à la maison
            <button @click="setArriveeMaison" class="imageButton">
                <img :src="require('@/assets/house.png')" class="houseImage">
            </button>
        </h2>
    </div>
    </br>
    
    Une autre adresse ?
    <input v-on:keyup.enter="setNewArrivee" disabled placeholder="Destination" />
    <button @click="setNewArrivee" class="imageButton">
        <img :src="require('@/assets/search.png')" class="searchImage" style="">
    </button>
    </br></br>
    <MapComponent role="drunk" :destination.sync="destination" :directions="false" height="150px" class="map"/>
    </br></br>

    <button @click="cancel" class="actionButton" style="background-color: #EC4125">
        ANNULER
    </button>
    <button @click="submit" class="actionButton" style="background-color: #00367C">
        GO HOME
    </button>
  </div>
</template>

<script>
import MapComponent from '@/components/Map';
import RetourComponent from '@/components/Retour';
import { postTrip } from '@/services/api';

export default {
  name: 'RetourView',
  components: { RetourComponent, MapComponent },
  data() {
    return {
      destination: {},
    };
  },
  methods: {
    setArriveeMaison() {
      this.destination = { position: { lat: 43.6260527, lng: 1.4321067 } };
    },
    setNewArrivee() {
      // TODO: récupérer les coordonnées depuis l'adresse entrée à la main
    },
    cancel() {
      this.$router.push('/');
    },
    submit() {
      this.$router.push('recap');
      //TODO: envoyer la requête de sam
      /*if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(data => {
          const origin = {
            lat: data.coords.latitude,
            lng: data.coords.longitude,
          };
          const destination = this.selectedAddress.position;
          postTrip('newTest2', origin, destination);
        });
      }*/
    },
  },
};
</script>

<style scoped>
.actionButton {
  border: none;
  color: white;
  font: 16px roboto, arial;
  height: 60px;
  width: 130px;
  cursor: pointer;
}
.imageButton {
  background-color: Transparent;
  border: none;
  cursor: pointer;
}
.houseImage {
  height: 50px;
  width: 50px;
  vertical-align: middle;
}
.searchImage {
  height: 20px;
  width: 20px;
  vertical-align: middle;
}
.map {
  max-height: 400px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
