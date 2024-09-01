<template>
    <div style="display: flex;">
        <div>
            <nav>
                <input type="radio" id="home" name="animation" class="input" v-model="selected" value="home"
                    @change="navigate('home')">
                <input type="radio" id="books" name="animation" class="input" v-model="selected" value="books"
                    @change="navigate('books')">
                <input type="radio" id="authors" name="animation" class="input" v-model="selected" value="authors"
                    @change="navigate('authors')">
                <input type="radio" id="news" name="animation" class="input" v-model="selected" value="news"
                    @change="navigate('news')">
                <input type="radio" id="contact" name="animation" class="input" v-model="selected" value="contact"
                    @change="navigate('contact')">
                <label for="home">
                    <a>Home</a>
                </label>
                <label for="books">
                    <a>BOOKS</a>
                </label>
                <label for="authors">
                    <a>AUTHORS</a>
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
        <div>
            <input type="text">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 'home'
        }
    },
    methods: {
        navigate(page) {
            this.$router.push({ name: page });
        }
    }
}

</script>
<style>
nav {
    /* position: fixed; */
    top: -20px;
    position: relative;
    width: 400px;
    height: 40px;
    background-color: #34495e;
    border-radius: 8px;
    font-size: 0;
    box-shadow: 2px 2px 2px #000;
    margin-right: 20px;
    z-index: 1000;
}

.input {
    display: none;
}

input {
    top: -20px;
    position: relative;
    height: 39px;
    border-radius: 20px;
}

nav a {
    width: 80px;
    height: 100%;
    line-height: 40px;
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
    width: 80px;
    left: 0;
    background-color: #1abc9c;
}

#books:checked~.animation {
    left: 20%;
    background-color: #e74c3c;
}

#authors:checked~.animation {
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