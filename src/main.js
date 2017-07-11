// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
//import axios from 'axios';
//import VueAxios from 'vue-axios';
import index from './components/index/index';
import ranking from './components/ranking/ranking';
import news from './components/news/news';
import details from './components/details/details';
import list from './components/list/list';
import login from './components/login/login';
import add from './components/add/add';
import forgetpwd from './components/forgetpwd/forgetpwd';
import forgetexpwd from './components/forgetpwd/forgetexpwd';
import modifypwd from './components/modifypwd/modifypwd';
import modifyexpwd from './components/modifypwd/modifyexpwd';
import myinfo from './components/myinfo/myinfo';
import updateusername from './components/myinfo/updateusername';
import updateidcard from './components/myinfo/updateidcard';
import bindbankcard from './components/myinfo/bindbankcard';
import updateemail from './components/myinfo/updateemail';
import firstoffline from './components/myoffline/firstoffline';
import secondoffline from './components/myoffline/secondoffline';

// import 'common/stylus/index.styl';
	Vue.use(VueRouter);
	Vue.use(VueResource);
  //Vue.use(axios);
 // Vue.use(VueAxios, axios);

 // Vue.prototype.$ajax = axios;


const routes = [
  { path: "/", redirect: "/index" },  //  重定向
  { path: '/index', component: index },
  { path: '/ranking', component: ranking },
  { path: '/news', component: news },
  { path: '/details', component: details },
  { path: '/list', component: list },
  { path: '/login', component: login },
  { path: '/add', component: add },
  { path: '/forgetpwd/forgetpwd', component: forgetpwd },
  { path: '/forgetpwd/forgetexpwd', component: forgetexpwd },
  { path: '/modifypwd/modifypwd', component: modifypwd },
  { path: '/modifypwd/modifyexpwd', component: modifyexpwd },
  { path: '/myinfo/myinfo', component: myinfo },
  { path: '/myinfo/updateusername', component: updateusername },
  { path: '/myinfo/updateidcard', component: updateidcard },
  { path: '/myinfo/bindbankcard', component: bindbankcard },
  { path: '/myinfo/updateemail', component: updateemail },
  { path: '/myoffline/firstoffline', component: firstoffline },
  { path: '/myoffline/secondoffline', component: secondoffline }
];
const router = new VueRouter({
  routes: routes,
  linkActiveClass:'active'
});
const app = new Vue({
  router: router,
   render: h => h(App),
   watch:{
    "$route" : 'checkLogin'
  },
   created() {
    this.checkLogin();
  },
  methods:{
    checkLogin(){
      //检查是否存在session
      // if(!this.getCookie('session')){
      //   //如果没有登录状态则跳转到登录页
      //   this.$router.push('/login');
      // }else{
      //   //否则跳转到登录后的页面
      //   this.$router.push('/index');
      // }
    }
  },
}).$mount('#app');

// router.go('/goods');
