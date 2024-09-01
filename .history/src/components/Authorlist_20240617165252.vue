<template>
    <div>
        {{ classify }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'authorlist',
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