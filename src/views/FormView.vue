<template>
  <FormComponent :userAddress="userAddress" />
</template>

<script>
import FormComponent from '@/components/Form';

export default {
  name: 'RetourView',
  components: { FormComponent },
  data() {
    return {
      userAddress: [
        {
          name: 'Maison',
          position: {
            lat: 43.59472239999999,
            lng: 1.4352956999999833,
          },
        },
        {
          name: 'Boulot',
          position: {
            lat: 43.57938969999999,
            lng: 1.4942346999999927,
          },
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
