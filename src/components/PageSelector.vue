<template>
  <div id="pageSelectorWeb" class="col-sm-4">
    <div class="selector">
        <div id="marker"></div>
        <div @click="indicator();linkTo('/Home')">{{ $t('home') }}</div>
        <div @click="indicator();linkTo('/AboutMe')">{{ $t('aboutme') }}</div>
        <div @click="indicator();linkTo('/MyJob')">{{ $t('myjob') }}</div>
    </div>
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