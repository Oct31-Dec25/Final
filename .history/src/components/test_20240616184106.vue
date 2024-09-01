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

nav a {
    width: 100px;
    height: 100%;
    line-height: 50px;
    font-size: 15px;
    display: inline-block;
    position: relative;
    z-index: 1;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: white;
    cursor: pointer;
}

nav.animation {
    position: absolute;
    height: 100%;
    top: e;
    z-index: 0;
    transition: all ls ease 0s;
    border-radius: 8px;
    width: 100px;
    left: 0;
    background-color: #1abc9c;
}
</style>