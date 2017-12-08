<template>
  <div>
    <div>
        <h2>Retour à la maison
            <button class="imageButton">
                <img @click="setArrivee" :src="require('@/assets/house.png')" class="houseImage">
            </button>
        </h2>
    </div>
    </br>
    
    Une autre adresse ?
    <input v-on:keyup.enter="localize" v-model="destination" placeholder="Destination" />
    <button @click="setArrivee" class="imageButton">
        <img :src="require('@/assets/search.png')" class="searchImage" style="">
    </button>
    </br></br>
    <MapComponent role="drunk" :destination="destination" :directions="false" class="map"/>
    </br></br>

    <button @click="cancel" class="actionButton"
            style="background-color: #EC4125">
        ANNULER
    </button>
    <button @click="submit" class="actionButton"
            style="background-color: #00367C">
        GO HOME
    </button>
  </div>
</template>

<script>
import MapComponent from '@/components/Map';
import RetourComponent from '@/components/Retour';
export default {
  name: 'RetourView',
  components: { RetourComponent, MapComponent },
  data() {
    return {
      //something
    };
  },
  methods: {
    setArrivee() {
      this.destination = 'position: { lat: 43.6260527, lon: 1.4321067 }';
    },
    localize() {
      // TODO: récupérer les coordonnées depuis l'adresse entrée à la main
    },
    cancel() {
      //TODO: annuler la requête de sam
    },
    submit() {
      //TODO: envoyer la requête de sam
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
  height: 400px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}
</style>
