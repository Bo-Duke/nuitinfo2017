import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MapView from '@/views/MapView';
import RetourView from '@/views/RetourView';
import FormView from '@/views/FormView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld,
    },
    {
      path: '/map',
      name: 'Map',
      component: MapView,
    },
    {
      path: '/retour',
      name: 'Rentrer chez soi',
      component: RetourView,
    },
    {
      path: '/form',
      name: 'Proposer un covoiturage',
      component: FormView,
    },
  ],
});
