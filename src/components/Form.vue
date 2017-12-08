<template>
  <div>
    <AddAddress v-if="showAddAddress" :handleAddAddress="handleAddAddress" />
    <h3>Bravo ! Vous êtes le Sam de cette soirée. Mais attention, vous êtes donc RESPONSABLE.</h3>
    <label>Départ:</label> <input class="input-start" type="text" value="Ma position" disabled/><br/>
    <label>Arrivée:</label>
    <select v-model="selectedAddress" @change="changeDestination" class="input-address">
        <option v-for="address in userAddress" :key="address.name" :value="address">{{ address.name }}</option>
    </select>
    <button @click="addAddress" class="add-address">+</button>
    <div class="voiture">
        <h1>Voiture</h1>
        <label>Type carrosserie: </label>
        <select>
            <option v-for="carrosserie in carrosseries" :key="carrosserie" :value="carrosserie">{{ carrosserie }}</option>
        </select><br/>
        <label>Couleur: </label><input type="text" />
    </div>
    <MapComponent v-if="showMap" class="mapcomponent" role="driver" :destination.sync="selectedAddress" :directions="true" height="150px"/>
    <button @click="handleLaunch" class="validate-button">Lancer trajet</button>
  </div>
</template>

<script>
import MapComponent from '@/components/Map';
import AddAddress from '@/components/AddAddress';

export default {
  props: ['userAddress'],
  components: { MapComponent, AddAddress },
  data() {
    return {
      showAddAddress: false,
      showMap: true,
      selectedAddress: this.userAddress[0],
      carrosseries: [
        'Coupé',
        'Cabriolet',
        'Fourgonnette',
        'Berline',
        'Monospace',
      ],
    };
  },
  methods: {
    changeDestination() {
      this.showMap = false;
      setTimeout(() => {
        this.showMap = true;
      }, 200);
    },
    handleLaunch() {
      // do something
    },
    handleAddAddress(address) {
      this.userAddress.push(address);
      this.showAddAddress = false;
    },
    addAddress() {
      this.showAddAddress = true;
    },
  },
};
</script>

<style scoped>
.voiture {
  border: 1px solid black;
  border-radius: 15px;
  margin-top: 15px;
  padding-bottom: 10px;
}
.voiture > h1 {
  text-align: left;
  font-size: 1.4em;
  background-color: #00367c;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
  margin-bottom: 10px;
  color: white;
  border-radius: 15px 15px 0 0;
}

.add-address {
  background-color: #00367c;
  color: white;
  width: 30px;
}

.input-start {
  width: 150px;
}

.input-address {
  width: 120px;
}

.mapcomponent {
  margin-top: 15px;
}

.validate-button {
  margin-top: 15px;
  background-color: #00367c;
  color: white;
  font-size: 1.2em;
}
</style>
