<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:0;" v-if="book">
        <div style="margin: 25px 0 25px;" class="shadow-panel">

            <!-- TODO设置左部顶端导航--并实现返回功能 -->
            <!-- <router-Link :to="'/'">
                <img src="../../images/back.png" alt="back" class="navigation" title="返回">
            </router-Link> -->

            <!-- TODO设置图片 -->
            <div style=" width: 460px;">
                <img :src="book.src" alt="" class="shadow-img-bookdetail">
            </div>

            <!-- TODO设置右部导航 -->
            <!-- <div style="display: flex;flex-direction: column-reverse;padding-bottom: 4px;">
                <img src="../../images/like.png" alt="" class="navigation" title="收藏">
                <img src="../../images/share.png" alt="share" style="margin-bottom: 5px;" class="navigation" title="分享">
                <img src="../../images/viewlist.png" alt="viewlist" style="margin-bottom: 5px;" class="navigation"
                    title="目录">
            </div> -->

            <!-- TODO设置简介 -->
            <div style="width: 460px;margin-left: auto;">
                <div style="height: auto; padding-top: 20px;">

                    <!-- TODO设置BookName -->
                    <div style="font-size:27px;font-weight: bolder;">
                        <router-Link :to="''">
                            {{ book.name }}
                        </router-Link>
                    </div>

                    <!-- TODO设置分界线 -->
                    <div style="border-top: 2px solid lightgrey; margin: 24px 0;"></div>

                    <!-- TODO设置table -->
                    <div style="font-size: 25px;font-weight:400;margin-top: 25px;margin-bottom: 5px;">
                        <table class="table">

                            <!-- TODO设置作者 -->
                            <tr>
                                <td style="text-align: right;">作者:</td>
                                <td>
                                    <router-Link :to="'/author/' + book.author">
                                        <a href>{{ book.author }}</a>
                                    </router-Link>
                                </td>
                            </tr>

                            <!-- TODO设置语言 -->
                            <tr>
                                <td style="text-align: right;">语言:</td>
                                <td>{{ book.language }}</td>
                            </tr>

                            <!-- TODO设置出版年份 -->
                            <tr> 
                                <td style="text-align: right;">出版年份:</td>
                                <td>2024</td>
                            </tr>

                            <!-- TODO设置链接 -->
                            <tr>
                                <td style="text-align: right;">下载链接:</td>
                                <td style="display: flex;">
                                    <a href="https://www.douyin.com/">PDF</a>
                                    <img src="../../images/pdf.png" alt="" style="width: 25px;height:25px;">
                                </td>
                            </tr>

                        </table>
                    </div>

                    <!-- TODO设置分界线 -->
                    <div style="border-top: 2px solid lightgrey; margin: -20px 0 7px;"></div>

                    <div
                        style="height: 183px;border-radius: 10px;display: flex;gap: 5px;padding: 10px 10px 0 10px;flex-direction: column;text-align: left;">
                        <div style="margin-bottom: 5px;display: flex;gap: 30px;">
                            <div>
                                <span style="font-size: 25px;font-weight: bold;">评论</span>
                                <span style="font-size: 20px">{{ number }}</span>
                            </div>
                            <div>
                                <!-- <span style="font-size: 25px;font-weight: bold;">收藏</span> -->
                                <span @click="addcollection">
                                    <img :src="!collectionActive ? require('../../images/uncollection.png') : require('../../images/collection.png')"
                                        alt="" style="width: 30px;height: 30px;cursor: pointer;">
                                </span>
                                <span style="font-size: 20px">{{ collectionCount }}</span>
                            </div>
                        </div>
                        <div style="display: flex;gap: 30px;">
                            <button class="btn">
                                <img src="../../images/avatar.png" alt="" style="height: 25px;width: 25px;">
                            </button>
                            <div class="input-wrapper">
                                <input id="input" type="text" v-model="newComment" placeholder="输入评论" ref="getValue">
                                <button class="btn" @click="addComment">
                                    <img src="../../images/send1.png" alt="" style="height: 20px;width: 25px;">
                                </button>
                            </div>
                        </div>
                        <div v-for="comment in visibleComments" :key="comment.id" style="margin-top: 5px;">
                            <span>{{ comment.text }} </span>
                            <span>{{ comment.time }} </span>
                        </div>
                        <!-- <button v-if="comments.length > visibleCount" @click="showMore">显示更多评论</button> -->
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            number: 2388,
            collectionCount: 1980, // 初始收藏数
            collectionActive: false,// 是否收藏过
            comments: [],
            newComment: '',
            visibleCount: 3
        }
    },
    computed: {
        ...mapState({
            booklist: state => state.booklist,
        }),
        book() {
            return this.booklist.find(book => book.name === this.$route.params.name);
        },
        visibleComments() {
            return this.comments.slice(0, this.visibleCount);
        }
    },
    methods: {
        addcollection() {
            this.collectionActive = !this.collectionActive; // 切换收藏状态
            this.collectionCount += this.collectionActive ? 1 : -1; // 根据收藏状态增加或减少计数
        },
        addComment() {
            if (this.newComment.trim() !== '') {
                let now = new Date();//获取时间
                console.log(now);
                let dateTime = now.toLocaleString('en-US').replace(/,/g, '');//格式转化
                console.log(dateTime);
                this.comments.push({
                    id: this.comments.length,
                    text: this.newComment,
                    time: dateTime
                });
                this.newComment = '';
                this.number += 1;//评论数加1
                console.log(this.comments)
            }
        },
        // showMore() {
        //     this.visibleCount += 1; // 每次点击增加1条评论
        // }
    }
}
</script>
<style>
table {
    /* border: solid 1px; */
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    margin-bottom: 20px
}

td {
    /* border: solid 2px; */
    height: 40px;
    padding: 8px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;

}

.shadow-img-bookdetail {
    /* border: 1px solid; */
    background-color: #fff;
    box-shadow: 20px 15px 30px rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 420px;
    height: 528px;
}

.shadow-panel {
    border: 2px solid #d3d3d3;
    border-radius: 10px;
    /* border: 2px solid #ffbf00; */
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 17px 20px;
}

.navigation {
    width: 40px;
    height: 35px;
    margin: 0 -17px;
    background-color: #ffbf00;
}

.navigation:active {
    background-color: #333333;
}
</style>