<template>
    <div style="display: flex;justify-content: center;">
        <div class="cards">
            <div class="card">
                <img :src="booklist[0].src" alt="" class="shadow-img ">
            </div>
            <div class="card">
                <img :src="booklist[1].src" alt="" class="shadow-img ">
            </div>
            <div class="card">
                <img :src="booklist[2].src" alt="" class="shadow-img ">
            </div>
        </div>
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
    background: linear-gradient(to bottom, #3498db, #2ecc71);
}

.cards {
    border: solid 2px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    width: 50%;
    aspect-ratio: 3/2;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.1);
    background-color: transparent,
}

.cards .shadow-img {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    width: 110px;
    height: 146px;
    margin-bottom: 20pxs;
}

/* .card:hover {
    z-index: 1;
} */

.cards .card {
    transition: 400ms;
}

.cards .card:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.cards:hover>.card {
    filter: blur(20px);
    transform: scale(0.9, 0.9);
}
</style>