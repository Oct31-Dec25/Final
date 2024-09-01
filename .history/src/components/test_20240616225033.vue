<template>
    <div>
        <!-- <nav>
            <a v-for="item in navList" :key="item.enName">
                {{ item.name }}
            </a>
            <div class="animation">
            </div>
        </nav> -->
        <nav>
            <input type="radio" id="home">
            <input type="radio" id="about">
            <input type="radio" id="blog">
            <input type="radio" id="news">
            <input type="radio" id="contact">
            <label for="home">
                <a>Home</a>
            </label>
            <label for="about">
                <a>ABOUT</a>
            </label>
            <label for="blog">
                <a>BLOG</a>
            </label>
            <label for="news">
                <a>NEWS</a>
            </label>
            <label for="contact">
                <a>CONTACT</a>
            </label>
        </nav>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            navList: [
                { id: "home", name: "HOME", },
                { id: "about", name: "ABOUT", },
                { id: "blog", name: "BLOG", },
                { id: "news", name: "NEWS", },
                { id: "contact", name: "CONTACT" },
            ],
        }
    },
    computed: {
        ...mapState({
            classify: state => state.classify,
            booklist: state => state.booklist,
            booklistDownload: state => state.booklistDownload,
        })
    },
    methods: {

    }
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

input {
    display: none;
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
    /* z-index: 0; */
    transition: all 0.1s ease 0s;
    border-radius: 8px;
    width: 100px;
    left: 0;
    background-color: #1abc9c;
}

#ABOUT:checked~.animation {
    left: 40%;
}

/* a:nth-child(1):active~.animation {
    left: 0;
    background-color: #1abc9c;
}

a:nth-child(1):hover~.animation {
    left: 0;
    background-color: #1abc9c;
}

a:nth-child(2):active~.animation {
    left: 20%;
    background-color: #e74c3c;
}

a:nth-child(3):active~.animation {
    left: 40%;
    background-color: #3498db;
}

a:nth-child(4):active~.animation {
    left: 60%;
    background-color: #9b59b6;
}

a:nth-child(5):active~.animation {
    left: 80%;
    background-color: #e67e22;
} */
</style>