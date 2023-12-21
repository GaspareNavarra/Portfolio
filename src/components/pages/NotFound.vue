<template>
    <div>
        <h1>404 Not Found</h1>
        <p>La pagina che stai cercando non esiste.</p>
    </div>
</template>

<script>
export default {
    inject: ['disableNavigation'],
    beforeMount() {
        this.disableNavigation();
    }
};
</script>
