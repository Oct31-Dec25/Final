<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div style="margin: 25px 0 25px;" class="shadow-panel">

            <router-Link :to="'/'">
                <img src="../../images/back2.png" alt="back"
                    style="width:40px; height:35px;margin: 0 -17px;background-color:#ffbf00;">
            </router-Link>
            <!-- TODO设置图片 -->
            <div style=" width: 460px;">
                <img :src="book.src" alt="" class="shadow-img">
            </div>

            <!-- TODO设置导航 -->
            <div style="display: flex;flex-direction: column;justify-content:space-between;">


                <div style="display: flex;flex-direction: column-;">
                    <img src="../../images/share.png" alt="back"
                        style="width:40px; height:35px;margin: 0 -17px;background-color:#ffbf00;margin-bottom: 5px;">
                    <img src="../../images/like.png" alt=""
                        style="width:40px; height:35px;margin: 0 -17px;background-color:#ffbf00;">
                </div>
            </div>
            <!-- TODO设置简介 -->
            <div style="width: 460px;margin-left: auto;">
                <div style="height: auto; padding-top: 20px;border: solid 2px;">

                    <!-- TODO设置BookName -->
                    <div style="font-size:27px;font-weight: bolder;">
                        <a href>
                            {{ book.name }}
                        </a>
                    </div>

                    <!-- TODO设置分界线 -->
                    <div style="border-top: 2px solid lightgrey; margin: 24px 0;"></div>

                    <!-- TODO设置table -->
                    <div style="font-size: 25px;font-weight:400;margin-top: 25px;">
                        <table class="table">
                            <!-- TODO设置作者 -->
                            <tr>
                                <td style="text-align: right;">作者:</td>
                                <td>
                                    <a href>{{ book.author }}</a>
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
                                    <a href>PDF</a>
                                    <img src="../../images/pdf.png" alt="" style="width: 25px;height:25px;">
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
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
        }),
        book() {
            return this.booklist.find(book => book.id === parseInt(this.$route.params.id));
        }
    },
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


.shadow-img {
    /* border: 1px solid; */
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    width: 420px;
    height: 528px
}

.shadow-panel {
    /* border: 2px solid #d3d3d3; */
    border: 3px solid #ffbf00;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 17px 20px;
}
</style>