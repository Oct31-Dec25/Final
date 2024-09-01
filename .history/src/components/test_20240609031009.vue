<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div v-for="item in book" :key="item.id">
            <ul style="border: solid 2px;">
                <li style="display: flex;">
                    <div>
                        <img :src="item.src" alt="" class="shadow-img">
                    </div>
                    <div style="width: 620;padding: 10px 0 0 10px;">
                        <ul class="book-property">
                            <li>
                                <span class="book-property__title">书名：</span>
                                <a>Grokking Web
                                    Application Security</a>
                            </li>

                            <li>
                                <span class="book-property__title">作者：</span>
                                <span>Malcolm McDonald</span>
                            </li>
                            <li>
                                <span class="book-property__title">语言：</span>
                                <span>{}}</span>
                            </li>
                            <li>
                                <span class="book-property__title">出版年份：</span>
                                <span>{{}}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
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

.book-property {
    list-style: none;
    margin: 0;
}

.book-property li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 10px 0;
}

.book-property__title {
    color: grey;
}
</style>