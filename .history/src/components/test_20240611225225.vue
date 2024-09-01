<template>
    <div>
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
.test:hover {
    transform: scale(1.2);
}
</style>