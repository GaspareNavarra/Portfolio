<template>
  <div id="pageSelectorWeb" class="col-sm-4">
    <div class="selector">
        <div id="marker" :style="{left: left, width: width}"></div>
        <div id="Home" @click="setMarkerPosition('Home');linkTo('/Home')">{{ $t('home') }}</div>
        <div id="AboutMe" @click="setMarkerPosition('AboutMe');linkTo('/AboutMe')">{{ $t('aboutme') }}</div>
        <div id="MyJob" @click="setMarkerPosition('MyJob');linkTo('/MyJob')">{{ $t('myjob') }}</div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ['linkTo'],
  data() {
    return {
      left: 0,
      width: 0
    }
  },
  methods: {
    setMarkerPosition(id) {
      if(id == '') {id = 'Home';}

      this.left = document.querySelector('#' + id).offsetLeft + 'px';
      this.width = document.querySelector('#' + id).offsetWidth + 'px';
    },
  },
  mounted() {
    let splitted_url = window.location.href.split('/');
    let last_piece_url = splitted_url.length;
    let page = splitted_url[last_piece_url - 1];
    this.setMarkerPosition(page);
  }
}
</script>