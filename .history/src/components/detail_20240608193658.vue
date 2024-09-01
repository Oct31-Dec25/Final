<template>
    <div>
        <img src="booklist[0].src" alt="">
        <div>{{ booklist[0].src }}</div>
        <div>{{ booklist[0].src }}</div>
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
<style></style>