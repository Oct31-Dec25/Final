<template>
    <div>
        {{ booklistDownload }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "news",

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