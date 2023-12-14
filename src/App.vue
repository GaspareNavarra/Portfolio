<template>
  <div id="homepage" class=" row no-margin">
    <nav-bar></nav-bar>
    
    <router-view></router-view>
    <bottom-bar></bottom-bar>
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
    }
  },
  methods: {
    linkTo(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style>
</style>
