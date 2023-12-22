<template>
  <div id="homepage" class=" row no-margin">
    <nav-bar :navigationIsShown="navigationIsShown"></nav-bar>
    
    <router-view></router-view>
      <!-- <transition name="fade">
        <component :is="Component"></component>
      </transition> -->
    <bottom-bar :navigationIsShown="navigationIsShown"></bottom-bar>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import BottomBar from './components/BottomBar.vue';
export default {
  components: { NavBar, BottomBar },
  provide() {
    return{
      linkTo: this.linkTo,
      disableNavigation: this.disableNavigation
    }
  },
  data() {
    return {
      navigationIsShown: true
    }
  },
  methods: {
    linkTo(path) {
      this.$router.push(path);
    },
    disableNavigation() {
      this.navigationIsShown = false;
    }
  }
}
</script>

<style>
</style>
