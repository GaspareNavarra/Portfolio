<template>
  <div id="homepage" class=" row no-margin">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar },
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
