<template>
    <div class="card">
        <img src="../../images/Euler'sFormula_Full.png" alt="" class="test">
        <img src="../../images/Euler'sFormula_Full.png" alt="" class="test">
        <img src="../../images/Euler'sFormula_Full.png" alt="" class="test">
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            classify: state => state.classify,
            booklist: state => state.booklist,
            booklistDownload: state => state.booklistDownload,
        })
    },
}
</script>
<style>
.card .test:hover {
    transform: scale(1.1, 1.1);
}

.card:hover>.test:not(:hover) {
    filter: blur(1px);
    transform: scale(0.9, 0.9);
}
</style>