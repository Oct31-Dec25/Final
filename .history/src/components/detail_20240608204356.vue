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
                    <div>
                        <table style="border: solid 2px;width: 460px;">
                            <tr>
                                <td style="text-align: right;width: 100px;">hlakf</td>
                                <td style="text-align: left;width: 100px;">hlakf</td>
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
ul>li {
    display: inline-block;

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