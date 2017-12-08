<template>
  <div>
    <h2>Récapitulatif du trajet</h2>
    <div v-if="!pending">
      </br>
      
      <label class="label">{{name}}</label> vient vous chercher </br></br>

      A l'emplacement <label class="label">{{emplacement}}</label> </br></br>

      A <label class="label">{{heure}}</label>, soit dans <label class="label">XX</label> minutes. </br></br>
      
      Dans une <label class="label">{{voiture}}</label>
      </br>
      <img :src="require('@/assets/car.png')"/>
      </br>

      <button @click="cancel" class="actionButton" style="background-color: #EC4125">
          ANNULER
      </button>
    </div>
    <h3 v-if="pending">En attente d'un conducteur proche de vous</h3>
  </div>
</template>

<script>
import MapComponent from '@/components/Map';
import RecapComponent from '@/components/Recap';
import authService from '@/services/auth';
import { findMatch } from '@/services/api';

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export default {
  name: 'RecapView',
  components: { RecapComponent, MapComponent },
  data() {
    return {
      destination: { position: { lat: 0, lon: 0 } },
      name: 'PENDING',
      emplacement: 'EMPLACEMENT',
      heure: 'HEURE',
      voiture: 'VOITURE',
      pending: true,
    };
  },
  methods: {
    cancel() {
      this.$router.push('/');
    },
  },
  created() {
    console.log('created')
    const gatherData = (data) => {
      console.log(data)
      if(isEmpty(data)){
        this.pending = true
      } else {
        this.pending = false
      }
      this.name = data.userId
    }
    setTimeout(() =>
    findMatch(authService.user.uid, gatherData), 200);
  }
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
