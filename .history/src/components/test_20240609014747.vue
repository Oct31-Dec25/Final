<template>
    <div>
        <div style=" width: 460px;">
            <img :src="book.src" alt="" class="shadow-img">
        </div>
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
        book() {
            return this.booklist.find(book => book.id === 2);
        }
    },
}
</script>
<style></style>