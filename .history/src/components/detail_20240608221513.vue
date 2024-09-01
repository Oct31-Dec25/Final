<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div style="height: 1px;"></div>
        <div style="margin: 25px 0 25px" class="shadow-panel">
            <div style="width: 460px;">
                <img :src="booklist[0].src" alt="" class="shadow-img">
            </div>
            <div style="width: 460px;margin-left: auto;">
                <div style="height: auto; padding-top: 20px;">
                    <div style="font-size:27px;font-weight: bolder;">
                        <a href>
                            {{ booklist[0].name }}
                        </a>
                    </div>
                    <div style="border-top: 2px solid lightgrey; margin: 28px 0;"></div>
                    <div style="font-size: 25px;font-weight:400;margin-top: 25px;">
                        <table class="table">
                            <tr>
                                <td style="text-align: right;">作者:</td>
                                <td>Ángel Sola Orbaiceta</td>
                            </tr>
                            <tr>
                                <td style="text-align: right;">语言:</td>
                                <td>英文</td>
                            </tr>
                            <tr>
                                <td style="text-align: right;">出版年份:</td>
                                <td>2024</td>
                            </tr>
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
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 17px 20px;
}
</style>