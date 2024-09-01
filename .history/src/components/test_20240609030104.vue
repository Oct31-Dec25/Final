<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div v-for="item in book" :key="item.id">
            <ul style="border: solid 2px;">
                <li style="border: solid 2px;">
                    <dir >
                        <img :src="item.src" alt="" class="shadow-img">
                    </dir>
                    <dir>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </dir>
                </li>
            </ul>
            <div>{{ item.name }}</div>
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

ul {
    /* border: solid 2px; */
    display: flex;
    width: auto;
    height: auto;
    list-style: none;
    text-align: left;
    padding: 0 12px;
    flex-wrap: wrap
}

ul>li {
    /* border: solid 2px; */
    width: 900px;
    height: auto;
    display: inline-block;
}
</style>