<template>
    <div>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            <div class="animation">
            </div>
        </nav>
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