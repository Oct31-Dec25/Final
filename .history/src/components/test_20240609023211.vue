<template>
    <div>
        <div>{{ book }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            author: this.$route.params.author
        }
    },
    computed: {
        ...mapState({
            classify: state => state.classify,
            booklist: state => state.booklist,
            booklistDownload: state => state.booklistDownload,
        }),
        book() {
            return this.booklist.filter(book => book.author === this.author);
        }
    },
}
</script>
<style></style>