import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Map from '@/components/Map';
import Login from '@/components/Login';
import MapView from '@/views/MapView';
import LoginView from '@/views/LoginView';

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
      path: '/login',
      name: 'Login',
      component: LoginView,
    },
  ],
});
