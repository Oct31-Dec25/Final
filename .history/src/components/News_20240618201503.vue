<template>
    <div>
        <div style="display: flex;justify-content: space-between;width: 100%vw;">
            <!-- TODO 设置logo -->
            <img src="../../images/booklogo.png" alt="" style="height: 50px;width: 50px;">

            <!-- TODO设置导航 -->
            <div class="center" style="margin-bottom: 10px;width: 50vw;">
                <div style="" class="center search">
                    <input id="navinput" type="text" :placeholder="placeholderText1" @click="homeClick">
                    <input id="navinput" type="text" :placeholder="placeholderText2" @click="bookClick">
                    <input id="navinput" type="text" :placeholder="placeholderText3" @click="authorClick">
                </div>
            </div>

            <!-- TODO 设置搜索框 -->
            <div class="center" style="margin-bottom: 10px;width: 50vw;">
                <div style="" class="center search">
                    <input id="input" type="text" placeholder="输入你要查找的书籍" ref="getValue" v-model="searchQuery">
                    <button class="btn" type="submit" @click="subbmitButton">
                        <img src="../../images/search.png" alt="" style="height: 25px;width: 25px;">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "news",

    data() {
        return {
            searchQuery: '',
            placeholderText1: '首页',
            placeholderText2: '书架',
            placeholderText3: '作者',
        };
    },

}
</script>
<style></style>