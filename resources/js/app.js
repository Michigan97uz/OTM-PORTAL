/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'



Vue.use(VueRouter)



let routes = [
    { path: '/admin-panel', component:  require('./components/Adminpanel.vue' ) },
    { path: '/admin-sozlam', component:  require('./components/Adminsozlam.vue') },
    { path: '/adminlar', component:  require('./components/Adminlar.vue') },
    { path: '/sayt-sozlam', component:  require('./components/Saytsozlam.vue') },
    { path: '/yangiliklar', component:  require('./components/Yangiliklar.vue') },
    { path: '/elonlar', component:  require('./components/Elonlar.vue') },
    { path: '/qarorlar', component:  require('./components/Qarorlar.vue') },
    { path: '/profil', component:  require('./components/Profil.vue') },
    { path: '/boshqa', component:  require('./components/Boshqa.vue') }

  ]
  

  const router = new VueRouter({
    routes // сокращённая запись для `routes: routes`
  })
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
    data: {

      habar: 'Bu vue ishlavoti'
    }
});
