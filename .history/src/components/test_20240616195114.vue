<template>
    <div>
        <nav>
            <a href="">Home</a>
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
        return {
            { name: "首页", enName: "home" },
        { name: "产品", enName: "product" },
        { name: "文章", enName: "article" },
        { name: "联系我们", enName: "contact" },
    }
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

nav .animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    transition: all 0.5s ease 0s;
    border-radius: 8px;
    width: 100px;
    left: 0;
    background-color: #1abc9c;
}

a:nth-child(1):hover~.animation {
    left: 0;
    background-color: #1abc9c;
}

a:nth-child(2):hover~.animation {
    left: 100px;
    background-color: #e74c3c;
}

a:nth-child(3):hover~.animation {
    left: 200px;
    background-color: #3498db;
}

a:nth-child(4):hover~.animation {
    left: 300px;
    background-color: #9b59b6;
}

a:nth-child(5):hover~.animation {
    left: 400px;
    background-color: #e67e22;
}
</style>