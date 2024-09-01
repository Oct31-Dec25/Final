<template>
    <div>
        <div>fjkhflfh</div>
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
        }),
        booktest() {
            return this.booklist.find(booktest => booktest.id === parseInt(this.$route.params.id));
        }
    },
}
</script>
<style></style>