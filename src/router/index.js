import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Map from '@/components/Map';
import MapView from '@/views/MapView';
import RetourView from '@/views/RetourView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/map',
      name: 'Map',
      component: MapView,
    },
    {
      path: '/retour',
      name: 'Retour',
      component: RetourView,
    },
  ],
});
