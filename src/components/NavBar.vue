<template>
    <nav id="NavBar" class="navbar navbar-expand-lg navbar-dark bg-dark no-margin">
        <i></i>
        <dropdown-language></dropdown-language>
    </nav>
</template>
<script>
import DropdownLanguage from './DropdownLanguage.vue';
export default {
    components: { DropdownLanguage }
}
</script>