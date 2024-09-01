<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div style="height: 1px;"></div>
        <div style="margin: 25px 0 25px" class="shadow-panel">
            <div style="width: 460px;">
                <img :src="booklist[0].src" alt="" class="shadow-img">
            </div>
            <div style="width: 460px;margin-left: auto;">
                <div style="height: 410px; padding-top: 20px;">
                    <div style="font-size:27px;font-weight: bolder;">
                        <a href>
                            {{ booklist[0].name }}
                        </a>
                    </div>
                    <div style="font-size: 25px;font-weight: bolder;margin-top: 25px;">
                        <table>
                            <tr>
                                <td style="text-align: right;padding-right: 20px;">作者:</td>
                                <td style="text-align: left;width: 200px;">Ángel Sola Orbaiceta</td>
                            </tr>
                            <tr>
                                <td style="text-align: right;padding-right: 20px;">语言:</td>
                                <td style="text-align: left;width: 120px;">gfs</td>
                            </tr>
                            <tr>
                                <td style="text-align: right;padding-right: 20px;">出版年份:</td>
                                <td style="text-align: left;width: 120px;">gfs</td>
                            </tr>
                            <tr>
                                <td style="text-align: right;padding-right: 20px;border: solid 2px;">关于本书:</td>
                                <td style="text-align: left;width: 120px;">构建前端 Web
                                    框架（从头开始）是一本实践指南，旨在引导您创建自己的前端框架，密切反映您在职业生涯中经常使用的工具。我的主要目标是揭示框架的内部工作原理，使您能够更有效地利用它们的力量。但这本书不仅仅是关于教育的;这也是关于陶醉在旅程中！
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
table {
    width: 460px;
}

tr {
    height: 40px;
}

td {
    width: 100px;
    /* border: solid 1px; */
}

.shadow-img {
    border: 1px solid;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    width: 420px;
    height: 528px
}

.shadow-panel {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 17px 20px;
}
</style>