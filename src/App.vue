<template>
  <div id="homepage" class=" row no-margin">
    <nav-bar></nav-bar>
    <div id="center-line" class="row col-sm-12 mb-auto no-margin">
      <div class="name col-sm-5">
        <h1 class="title1">Gaspare</h1>
        <h1 class="title2 col-sm-9">Navarra</h1>
      </div>
      <div class="row col-sm-1 no-padding-left">
        <div class="middle-bar no-padding"></div>
      </div>
      <div class="descripiton text-shadow col-sm-6">
        <h2 class="biography">{{$t('presentation_message')}}</h2>
        <h3>A seguire l'archivio dei linguaggi di mia conoscenza</h3>
      </div>
    </div>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  components: { NavBar }
}
</script>

<style>
</style>
