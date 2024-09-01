<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:-10px;">
        <div v-for="item in books" :key="item.id" style="margin-bottom: 0;width: 1000px;">
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
        <span v-for="i in pageNum" @click="page(i)" :style="{cursor: 'pointer', margin:'10px'}">{{ i }}</span>
        <input type="button" value="下一页" @click="nextPage">
    </div>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            totalPage: [], // 所有分页的数据
            pageSize: 4, // 每页显示数量
            pageNum: 1,  // 共几页=所有数据/每页现实数量     
            dataShow: [], // 当前显示的数据  
            currentPage: 0 // 默认当前显示第一页
        }
    },
    created() {
        this.$store.dispatch('fetchbooks');
        this.pageNum = Math.ceil(books.length / this.pageSize) || 1;//计算有多少页数据，默认为1

        // 循环页面
        for (let i = 0; i < this.pageNum; i++) {
            // 每一页都是一个数组 形如 [['第一页的数据'],['第二页的数据'],['第三页数据']]
            // 根据每页显示数量 将后台的数据分割到 每一页,假设pageSize为2， 则第一页是1-2条，即slice(0,2)，第二页是3-4条，即slice(3,4)以此类推
            this.totalPage[i] = this.data.slice(this.pageSize * i, this.pageSize * (i + 1))
        }

        // 获取到数据后默认显示第一页内容
        this.dataShow = this.totalPage[this.currentPage];

    },
    computed: {
        ...mapGetters(['books']),
    },
    methods: {
        // 下一页
        nextPage() {
            if (this.currentPage === this.pageNum - 1) return;
            this.dataShow = this.totalPage[++this.currentPage];
        },
        // 上一页
        prePage() {
            if (this.currentPage === 0) return;
            this.dataShow = this.totalPage[--this.currentPage];
        },
        // 点击页码
        page(i) {
            this.currentPage = i
            this.dataShow = this.totalPage[i - 1];
        }

    }
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