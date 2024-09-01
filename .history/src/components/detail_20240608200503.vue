<template>
    <div style="margin-left:auto;margin-right:auto;width:1000px;margin-top:44px;">
        <div style="height: 1px;"></div>
        <div style="margin: 25px 0 25px" class="shadow-panel">
            ::before
            <div style="width: 460px;border: solid 2px;">
                <img :src="booklist[0].src" alt="">
            </div>
            <div style="width: 460px;">
            </div>
            ::after
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
.shadow-panel {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1)
}
</style>