<template>
    <div class="test">
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
.test:hover {
    transform: scale(1.2);
}

.test:not(:hover) {
    filter: blur(1px);
    transform: scale(0.9);

}
</style>