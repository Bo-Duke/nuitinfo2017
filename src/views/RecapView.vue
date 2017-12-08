<template>
  <div>
    <h2>Récapitulatif du trajet</h2>
    </br>
    
    <label class="label">SUPERMAN</label> vient vous chercher </br></br>

    A l'emplacement <label class="label">EMPLACEMENT</label> </br></br>

    A <label class="label">HEURE</label>, soit dans <label class="label">XX</label> minutes. </br></br>
    
    Dans une <label class="label">VOITURE</label>
    </br>
    <img :src="require('@/assets/car.png')"/>
    </br>

    <button @click="cancel" class="actionButton" style="background-color: #EC4125">
        ANNULER
    </button>
  </div>
</template>

<script>
import MapComponent from '@/components/Map';
import RecapComponent from '@/components/Recap';
import { postTrip } from '@/services/api';

export default {
  name: 'RecapView',
  components: { RecapComponent, MapComponent },
  data() {
    return {
      destination: { position: { lat: 0, lon: 0 } },
    };
  },
  methods: {
    cancel() {
      // TODO: annuler la requête de sam
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
.label {
  color: #00367c;
  font-weight: bold;
}
</style>
