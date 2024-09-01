<template>
    <div>
        <div style="display: ;">{{ book }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            classify: state => state.classify,
            booklist: state => state.booklist,
            booklistDownload: state => state.booklistDownload,
        }),
        book() {
            return this.booklist.filter(book => book.author === "Ángel Sola Orbaiceta");
        }
    },
}
</script>
<style></style>