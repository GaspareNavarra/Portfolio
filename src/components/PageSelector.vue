<template>
  <div id="pageSelectorWeb" class="col-sm-4">
    <div class="selector">
        <div id="marker"></div>
        <div id="HomePC" @click="indicator();linkTo('/Home')">{{ $t('home') }}</div>
        <div id="AboutMePC" @click="indicator();linkTo('/AboutMe')">{{ $t('aboutme') }}</div>
        <div id="MyJobPC" @click="indicator();linkTo('/MyJob')">{{ $t('myjob') }}</div>
    </div>
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
    },
    setMarkerPosition(id) {
      if(id == '') {id = 'Home';}
      let marker = document.querySelector('#marker');

      marker.style.left = document.querySelector('#' + id + 'PC').offsetLeft + 'px';
      marker.style.width = document.querySelector('#' + id + 'PC').offsetWidth + 'px';
    }
  },
  mounted() {
    let splitted_url = window.location.href.split('/');
    let last_piece_url = splitted_url.length;
    let page = splitted_url[last_piece_url - 1];
    this.setMarkerPosition(page);
  }
}
</script>