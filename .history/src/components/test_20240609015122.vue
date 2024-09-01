<template>
    <div>
        <dir>
            
        </dir>
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
            return this.booklist.find(book => book.id === parseInt(this.$route.params.id));
        }
    },
}
</script>
<style></style>