<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:-10px;">
        <div v-for="item in book" :key="item.id" style="margin-bottom: 0;width: 1000px;">
            <ul style="padding:0 10px ;border: 1px solid #d3d3d3; border-radius: 10px;" class="css-Author">
                <li style="display: flex; width: auto;">

                    <!-- TODO设置book图片 -->
                    <div>
                        <img :src="item.src" alt="" class="shadow-img">
                    </div>

                    <!-- TODO设置book的item -->
                    <div style="width: 620px;padding: 10px 0 0 10px;margin-left: 10px;">
                        <ul class="bookitem">
                            <li>
                                <span class="booktitle">书名：</span>
                                <router-Link :to="'/bookdetail/' + item.name">
                                    <span>{{ item.name }}</span>
                                </router-Link>
                            </li>

                            <li>
                                <span class="booktitle">作者：</span>
                                <span>{{ item.author }}</span>
                            </li>

                            <li>
                                <span class="booktitle">语言：</span>
                                <span>{{ item.language }}</span>
                            </li>

                            <li>
                                <span class="booktitle">出版年份：</span>
                                <span>
                                    {{ item.publicationYear }}
                                </span>
                            </li>

                        </ul>
                    </div>
                    <div class="download">
                        <div class="download-btn">install</div>
                    </div>
                </li>
            </ul>
        </div>
        <input type="button" value="上一页" @click="prePage">
        <span v-for="i in pageNum" @click="page(i)" :style="{ cursor: 'pointer', margin: '10px' }">{{ i }}</span>
        <input type="button" value="下一页" @click="nextPage">
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    name: 'booklist',
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch('fetchbooklist');

    },
    computed: {
        ...mapGetters(['booklist']),
        book() {
            return this.booklist.filter(book => book.languages === 中文);
        }
    },

}
</script>
<style>
.shadow-img {
    background-color: #fff;
    box-shadow: 20px 15px 30px rgba(0, 0, 0, 0.1);
    width: 140px;
    height: 180px;
    margin-left: 20px;
}

ul {
    display: flex;
    width: auto;
    height: auto;
    list-style: none;
    text-align: left;
    padding: 0 12px;
    flex-wrap: wrap
}

ul>li {
    width: 900px;
    height: auto;
    display: inline-block;
}

.bookitem {
    list-style: none;
    margin: 0;
}

.download {
    margin-left: 10px;
    padding: 0 0 30px 100px;
    font-size: 25px;
}

.download-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    height: 30px;
    background-color: #08c;
    border-top-right-radius: 10px;
}

.download-btn:active {
    background-color: #ffbf00;
}

.css-Author:hover {
    box-shadow: 7px 7px 3px rgba(0, 0, 0, 0.1);
    /* transform: translate(0, -10px);
    transform: scale(1.2) */
}

.bookitem li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 10px 0;
}

.booktitle {
    color: grey;
}
</style>