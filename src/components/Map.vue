<template>
  <gmap-map
    class="gmap-map"
    :center="{lat:43.6047, lng:1.4442}"
    :zoom="13"
  ></gmap-map>
</template>

<script>
export default {};
</script>

<style scoped>
.gmap-map {
  width: 100%;
  height: 450px;
}
</style>
