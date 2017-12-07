import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Map from '@/components/Map';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/map/driver',
      name: 'Map',
      component: Map,
      props: { role: 'driver' },
    },
    {
      path: '/map/drunk',
      name: 'Map',
      component: Map,
      props: { role: 'drunk' },
    },
  ],
});
