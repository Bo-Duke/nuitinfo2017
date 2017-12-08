<template>
  <retour
    class="retour"
    ref="ret"
    :center="center"
    :zoom="13"
  />
</template>

<script>
export default {
  // ['role', 'destination', 'directions', 'steps'],
  data() {
    return {
      //something
    };
  },
};
</script>

<style scoped>
.retour {
  width: 100%;
  height: 450px;
}
</style>
