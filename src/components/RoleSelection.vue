<template>
  <div>
      <h1>Ce soir je serais un.e ...</h1><br/>
      <button @click="handleSam" class="sam">SUPER SAM !</button><br/>
      <button @click="handleDrunk" class="drunk">Personne alcoolisée</button><br/>
  </div>
</template>

<script>
export default {
  methods: {
    handleSam() {
      this.$router.push('form');
    },
    handleDrunk() {
      this.$router.push('retour');
    },
  },
};
</script>

<style scoped>
.sam {
  margin-top: 20px;
  background-color: #a6bc29;
  padding: 15px;
}
.drunk {
  margin-top: 20px;
  background-color: #ec4125;
  padding: 15px;
}
</style>
