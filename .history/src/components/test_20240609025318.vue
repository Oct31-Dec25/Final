<template>
    <div>
        <div v-for="item in book" :key="item.id">
            <div>{{ item.name }}</div>
            <div>{{ item.src }}</div>
            <img :src="item.src" alt="" class="shadow-img">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState({
            classify: state => state.classify,
            booklist: state => state.booklist,
            booklistDownload: state => state.booklistDownload,
        }),
        book() {
            return this.booklist.filter(book => book.author === this.$route.params.author);
        }
    },
}
</script>
<style>
.shadow-img {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    width: 110px;
    height: 146px
}
</style>