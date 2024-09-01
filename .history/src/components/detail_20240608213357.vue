<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div style="height: 1px;"></div>
        <div style="margin: 25px 0 25px" class="shadow-panel">
            <div style="width: 460px;">
                <img :src="booklist[0].src" alt="" class="shadow-img">
            </div>
            <div style="width: 460px;margin-left: auto;">
                <div style="height: 410px; padding-top: 20px;">
                    <div style="font-size:30px;font-weight: bolder;">
                        <a href>
                            {{ booklist[0].name }}
                        </a>
                    </div>
                    <div style="font-size: 25px;;margin-top: 25px;">
                        <table>
                            <tr>
                                <td style="text-align: right;width: 120px;padding-right: 20px;">hlakf:</td>
                                <td style="text-align: left;width: 120px;padding-left: 20px;">gfs</td>
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
    height: 40px
}

td {
    width: 100px;
    border: solid 1px;
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