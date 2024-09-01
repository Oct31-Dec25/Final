<template>
    <div>
        <div style="margin-top: -90px;margin-bottom: -80px;justify-content: left;align-items: left;">
            <nav>
                <input type="radio" id="home" name="animation" class="input">
                <input type="radio" id="about" name="animation" class="input">
                <input type="radio" id="blog" name="animation" class="input">
                <input type="radio" id="news" name="animation" class="input">
                <input type="radio" id="contact" name="animation" class="input">
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
                <div class="animation">
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
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

.input {
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
    z-index: 0;
    transition: all 0.3s ease 0s;
    border-radius: 8px;
    width: 100px;
    left: 0;
    background-color: #1abc9c;
}

#about:checked~.animation {
    left: 20%;
    background-color: #e74c3c;
}

#blog:checked~.animation {
    left: 40%;
    background-color: #3498db;
}

#news:checked~.animation {
    left: 60%;
    background-color: #9b59b6;
}

#contact:checked~.animation {
    left: 80%;
    background-color: #e67e22;
}
</style>