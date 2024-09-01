<template>
    <div>
        <div class="cards" v-for="item in booklist" :key="item.id">
            <img :src="item.src" alt="" class="shadow-img card">
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
* {
    gap: 50px;
}

.cards {
    display: inline-block;

}

.cards .card:hover {
    transform: scale(1.1, 1.1);
}

.cards:hover>.card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
}

.shadow-img {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    width: 110px;
    height: 146px
}
</style>