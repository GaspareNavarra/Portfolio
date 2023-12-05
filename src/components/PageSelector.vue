<template>
  <div id="pageSelectorWeb" class="col-sm-4 selector">
    <div @click="indicator();linkTo('/Home')">Home</div>
    <div @click="indicator();linkTo('/AboutMe')">About me</div>
    <div @click="indicator();linkTo('/MyJob')">My job</div>
    <div id="marker"></div>
  </div>
  <div id="pageSelectorMobile">
    
  </div>
</template>
<script>
export default {
  inject: ['linkTo'],
  methods: {
    indicator() {
      let marker = document.querySelector('#marker');

      marker.style.left = event.target.offsetLeft + 'px';
      marker.style.width = event.target.offsetWidth + 'px';
    }
  },
}
</script>