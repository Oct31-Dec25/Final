<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div v-for="item in book" :key="item.id" style="margin-bottom: 0;display: flex;justify-content: space-between;">
            <ul style="padding: 10px 0;border: 1px solid #d3d3d3;box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);wi">
                <li style="display: flex; width: 500px;">

                    <!-- TODO设置book图片 -->
                    <div>
                        <img :src="item.src" alt="" class="shadow-img">
                    </div>

                    <!-- TODO设置book的item -->
                    <div style="width: 620;padding: 10px 0 0 10px;bod">
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
                </li>
            </ul>
            <div>fsaj</div>
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