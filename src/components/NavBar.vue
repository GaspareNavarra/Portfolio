<template>
    <nav id="NavBar" class="row navbar navbar-expand-lg navbar-dark bg-dark no-margin">
        <!-- <div id="hamburgerMenu" class="hamburger-menu" @click="openMenu()">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> -->
        <div id="Logo" class="col-sm-4">
            <img :src="Logo" class="img-size"/>
        </div>
        <page-selector :navigationIsShown="navigationIsShown"></page-selector>
        <dropdown-language></dropdown-language>
    </nav>
</template>
<script>
import DropdownLanguage from './DropdownLanguage.vue';
import PageSelector from './PageSelector.vue';
import Logo from '../../public/img/Gn-Logo.png';
export default {
    components: { DropdownLanguage, PageSelector },
    props: ['navigationIsShown'],
    data() {
        return {
            Logo: Logo
        }
    },
    methods: {
        openMenu() {
            document.body.classList.toggle('open');
        }
    }
}
</script>