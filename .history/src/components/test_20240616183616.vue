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
<style>
body {
    background-color: #2c3e50
}


nav {
    margin: 100px auto;
    position: relative;
    width: 500px;
    height: 50px;
    background-color: #34495e;
    border-radius: 8px;
    font-size: 0;
    box-shadow: 2px 2px 2px #000;
}
</style>