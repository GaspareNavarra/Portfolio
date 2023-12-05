<template>
  <div class="col-sm-4">
    <div id="langContainer" class="dropdown">
      <a
        class="btn btn-primary dropdown-toggle"
        :class="selectedLang()"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="active">
        {{$t('selectedLang')}}
      </a>
      <ul id="menuLang" class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton" role="menu">
        <li v-for="lang in langList" :key="lang.language">
          <a :class="getClassLanguage(lang.language)" class="dropdown-item" @click="changeLang(lang.language);" href="javascript:void(0)">{{lang.label}} <span v-show="showArrow(lang.language)">{{'<=='}}</span> </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import i18n from '../lang.js';

  export default {
    data () {
      return {
        active: false,
        langList: [{language: "en", label:"Eng"}, {language: "it", label:"Ita"}]

      }
    },
    methods: {
      changeLang(lingua) {
        i18n.global.locale = lingua;
        document.getElementById('menuLang').setAttribute('class', 'dropdown-menu');
      },
      selectedLang(){
        return i18n.global.locale;
      },
      getClassLanguage(lang) {
        if(lang == i18n.global.locale)
          return 'active ' + lang;
        else
          return lang;
      },
      showArrow(lang) {
        return lang == i18n.global.locale;
      }
    }
  }
</script>