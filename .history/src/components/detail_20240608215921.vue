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
                    <div style="font-size: 25px;font-weight:400;margin-top: 25px;">
                        <table class="table">
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
                                <td style="text-align: right;padding-right: 20px;">关于本书:</td>
                                <td style="text-align: left;width: 120px;">Build a Frontend Web Framework
                                    is a hands-on guide designed to lead you through the creation of your own frontend
                                    framework, closely mirroring the tools you routinely use in your professional life.
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
    border: solid 1px;
    max-width: auto;
    background-color: transparent;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    margin-bottom: 20px
}


.table td {
    border: solid 1px;
    padding: 8px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    /* border-top: 1px solid #ddd */
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