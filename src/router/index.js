import Vue from 'vue';
import Router from 'vue-router';
import RoleSelection from '@/components/RoleSelection';
import MapView from '@/views/MapView';
import RetourView from '@/views/RetourView';
import FormView from '@/views/FormView';
import RecapView from '@/views/RecapView';
import Login from '@/components/Login';
import authService from '@/services/auth';

Vue.use(Router);

function loginRequired(to, from, next) {
  if (authService.authenticated()) {
    next();
  } else {
    next('/login');
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: RoleSelection,
    },
    {
      path: '/map',
      name: 'Map',
      component: MapView,
      beforeEnter: loginRequired,
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
      beforeEnter: loginRequired,
    },
    {
      path: '/recap',
      name: 'Recap',
      component: RecapView,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
