<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div style="height: 1px;"></div>
        <div style="margin: 25px 0 25px" class="shadow-panel">
            <div style="width: 460px;">
                <img :src="booklist[0].src" alt="">
            </div>
            <div style="width: 460px;border: solid 1px;margin-left: auto;">
                <div style="height: 410px; padding-top: 35px;">
                    <div>
                        <ul>
                            <li>{{booklist[0].na}}</li>
                        </ul>
                        <div style="border: solid 1px;"></div>
                        <ul style=" display: flex;justify-content: space-between;">
                            <li>gfjask</li>
                            <li>gfjask</li>
                        </ul>
                        <ul>
                            <li>gfjask</li>
                        </ul>
                        <ul>
                            <li>gfjask</li>
                        </ul>
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

.shadow-panel {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 0 17px 20px;
}
</style>