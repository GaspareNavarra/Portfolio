<template>
    <nav id="NavBar" class="navbar navbar-expand-lg navbar-dark bg-dark no-margin">
        <img :src="Logo" class="img-size"/>
        <dropdown-language></dropdown-language>
    </nav>
</template>
<script>
import DropdownLanguage from './DropdownLanguage.vue';
import Logo from '../../public/img/Gn-Logo.png';
export default {
    components: { DropdownLanguage },
    data() {
        return {
            Logo: Logo
        }
    }
}
</script>