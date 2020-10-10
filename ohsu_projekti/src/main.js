import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import axios from 'axios';
import VueAxios from 'vue-axios';


Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import HomeComp from './components/HomeComp.vue';
import CreateComp from './components/CreateComp.vue';
import IndexComp from './components/IndexComp.vue';
import EditComp from './components/EditComp.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComp
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComp
  },
  {
      name: 'movies',
      path: '/movies',
      component: IndexComp
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComp
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');