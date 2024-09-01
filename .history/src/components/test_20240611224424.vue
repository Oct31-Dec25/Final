<template>
    <div>
        <img src="../../images/Euler'sFormula_Full.png" alt="">
        <img src="../../images/Euler'sFormula_Full.png" alt="">
        <img src="https://public.ysjf.com/content/title-image/F8SMp7JkQde.jpg" alt="" style="width: 741px;">
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
img:hover {
    filter: blur(2px);
}
</style>