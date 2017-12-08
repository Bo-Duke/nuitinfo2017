import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import MapView from '@/views/MapView';
import FormView from '@/views/FormView';

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
      path: '/form',
      name: 'Form',
      component: FormView,
    },
  ],
});
