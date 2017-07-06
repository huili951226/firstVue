<template>
  <transition name="fade">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </transition>
</template>

<script type="text/ecmascript-6">
  import footer from './components/footer/footer'
  import index from './components/index/index'
  import list from './components/list/list'
  import login from './components/login/login'
  import add from './components/add/add'
  import modifypwd from './components/modifypwd/modifypwd'
  import modifyexpwd from './components/modifypwd/modifyexpwd'
  export default {
  };
</script>

<style lang="stylus" type="type/stylus" rel="stylesheet/stylus">

</style>
