<template>
    <nav id="NavBar" class="row navbar navbar-expand-lg navbar-dark bg-dark no-margin">
        <div id="Logo" class="col-sm-4">
            <img :src="Logo" class="img-size"/>
        </div>
        <page-selector></page-selector>
        <dropdown-language></dropdown-language>
    </nav>
</template>
<script>
import DropdownLanguage from './DropdownLanguage.vue';
import PageSelector from './PageSelector.vue';
import Logo from '../../public/img/Gn-Logo.png';
export default {
    components: { DropdownLanguage, PageSelector },
    data() {
        return {
            Logo: Logo
        }
    }
}
</script>