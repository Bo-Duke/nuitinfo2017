<template>
  <div class="wrapper">
    <h1>Nouvelle adresse</h1>
    <label>Nom du lieu: </label><input v-model="name" type="text" /><br/>
    <label>Adresse: </label>
    <VueGoogleAutocomplete
      id="map"
      class="address-input"
      classname="form-control"
      placeholder="Start typing"
      v-on:placechanged="getAddressData"
    >
    </VueGoogleAutocomplete><br/>
    <button class="actionButton" style="background-color: #ec4125; margin-bottom: 10px">Annuler</button>
    <button @click="this.addAddress" class="actionButton" style="background-color: #a6bc29">Enregistrer</button>
  </div>
</template>

<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';

export default {
  props: ['handleAddAddress'],
  components: { VueGoogleAutocomplete },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    addAddress() {
      this.handleAddAddress({
        name: this.name,
        position: { lat: this.latitude, lng: this.longitude },
      });
    },
    getAddressData(addressData, placeResultData, id) {
      this.latitude = addressData.latitude;
      this.longitude = addressData.longitude;
    },
  },
};
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
  border-radius: 15px;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19);
}

.wrapper h1 {
  margin: 0;
  margin-bottom: 15px;
  border-radius: 15px 15px 0 0;
  text-align: left;
  font-size: 1.4em;
  background-color: #00367c;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: white;
}

.actionButton {
  border: none;
  color: white;
  font: 16px roboto, arial;
  height: 40px;
  width: 100px;
  cursor: pointer;
}

.address-input {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 153px;
}
</style>
