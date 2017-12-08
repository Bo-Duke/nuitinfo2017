import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MapView from '@/views/MapView';
import RetourView from '@/views/RetourView';
import FormView from '@/views/FormView';
import RecapView from '@/views/RecapView';

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
    {
      path: '/form',
      name: 'Form',
      component: FormView,
    },
    {
      path: '/recap',
      name: 'Recap',
      component: RecapView,
    },
  ],
});
