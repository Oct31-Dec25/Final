<template>
    <div style="margin-left:auto;margin-right:auto;width:80vw;margin-top:10px;">

        <!-- TODO 设置logo -->
        <!-- <div style="width: 225px;" class="center">
            <div class="logo">
                <span style="margin: 0 10px;">搬</span>
                <img src="../../images/booklogo.png" alt="" class="logopicture">
                <span style="margin: 0 10px;">书</span>
            </div>
        </div> -->
        <!-- TODO 设置logo -->
        <!-- TODO设置导航 -->
        <!-- TODO 设置搜索框 -->

        <!-- <div style="display: flex;justify-content: space-between;width: 100%vw;">
            <img src="../../images/booklogo.png" alt="" style="height: 50px;width: 50px;">

            <div class="center" style="margin-bottom: 10px;width: 50vw;">
                <div style="" class="center search">
                    <input id="navinput" type="text" :placeholder="placeholderText1" @click="homeClick">
                    <input id="navinput" type="text" :placeholder="placeholderText2" @click="bookClick">
                    <input id="navinput" type="text" :placeholder="placeholderText3" @click="authorClick">
                </div>
            </div>

            <div class="center" style="margin-bottom: 10px;width: 50vw;">
                <div style="" class="center search">
                    <input id="input" type="text" placeholder="输入你要查找的书籍" ref="getValue" v-model="searchQuery">
                    <button class="btn" type="submit" @click="subbmitButton">
                        <img src="../../images/search.png" alt="" style="height: 25px;width: 25px;">
                    </button>
                </div>
            </div>
        </div> -->

        <!-- TODO 设置分类 -->
        <div class="region">
            <div class="region-head">
                <span style="font-size: 19px;">书籍分类</span>
            </div>
            <div class="region-body" style="margin-top: 0; overflow: hidden;border: solid 2px #EEE;">
                <div class="row" v-for="(bookitem) in classify" :key="bookitem.name">
                    <div style="width: 80px;align-items: center;;">{{ bookitem.name }}</div>
                    <div style="width: 900px;height: auto;">
                        <ul>
                            <li>
                                <a href v-for="(classifyitem, classifyitemindex) in bookitem.classify"
                                    :key="classifyitemindex">
                                    <router-link :to="'/booklist/' + classifyitem">
                                        | {{ classifyitem }}
                                    </router-link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <br>

        <!-- TODO设置最近更新书单 -->
        <div class="region" v-if="booklistUpdate">

            <!-- TODO设置最近更新书单--导航 -->
            <div class="region-header" style="display: flex;justify-content: space-between;margin: 5px 20px;">
                <span style="font-size: 19px;">最新更新</span>
                <span style="font-size: 19px;">
                    <router-link :to="'/booklist'">
                        <a href>更多&gt;&gt;</a>
                    </router-link>

                </span>
            </div>

            <!-- TODO设置最近更新书单表格 -->
            <div class="region-body" style="margin-top: 0; overflow: hidden;border: solid 2px #EEE;">
                <ul>
                    <li v-for=" item in booklistUpdate.slice(0)" :key="item.id" style="width: 117px;" class="css">
                        <router-link :to="'/bookdetail/' + item.name">
                            <img :src="item.src" alt="" class="shadow-img-index" :title="item.name">
                        </router-link>
                        <div class="bookname">{{ item.name }}</div>
                    </li>
                </ul>
            </div>

        </div>
        <br>

        <!-- TODO设置下载书单 -->
        <div class="region" v-if="booklistDownload">

            <!-- TODO设置下载书单--导航 -->
            <div class="region-header" style="display: flex;justify-content: space-between;margin: 5px 20px;">
                <span style="font-size: 19px;">最多下载</span>
            </div>

            <!-- TODO设置下载书单表格 -->
            <div class="region-body" style="margin-top: 0; overflow: hidden;border: solid 2px #EEE;">
                <ul>
                    <li v-for=" item in booklistDownload.slice(0)" :key="item.name" style="width: 117px;" class="css">
                        <a href>
                            <img :src="item.src" alt="" class="shadow-img-index" :title="item.name">
                        </a>
                        <div class="bookname">{{ item.name }}</div>
                    </li>
                </ul>
            </div>
            fskf
            <br>
        </div>
    </div>


</template>
<script>
//引入辅助函数 'mapGetters' 从Vuex获取状态
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
        };
    },
    //使用 'mapGetters' 将 Vuex 的 getter 映射当前组件的计算属性。
    computed: {
        ...mapGetters(["booklistUpdate", "booklistDownload", "classify", 'booklist'])
    },
    //生命周期函数(初始化)
    created() {
        //派发 Vuex 的 action,用于从服务器获取书籍列表数据并存储在 Vuex 状态中。
        this.$store.dispatch('fetchbooklist');
        this.$store.dispatch('fetchclassify');
    },
    methods: {
        subbmitButton() {
            console.log(this.$refs.getValue.value)
            if (this.searchQuery.trim()) {
                this.$router.push(`/bookdetail/${encodeURIComponent(this.searchQuery)}`);
                // let path = this.searchQuery= author? 'bookdetail' : 'author';
                // this.$router.push(`/${path}/${encodeURIComponent(this.searchQuery)}`);
            } else {
                alert('请输入书籍名称');
            }
        },

    },

};
</script>
<style>
/* a {
    text-decoration-line: none
} */

.css:hover {
    box-shadow: 7px 7px 3px rgba(0, 0, 0, 0.1);
    transform: translate(0, -10px);
    transition: all 0.3s ease 0.001s;
    transform: scale(1.15)
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-left: auto;
    margin-right: auto; */
}

.center .search {
    border: solid 2px;
    width: 380px;
    height: 50px;
    border-radius: 20px;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 35px;
}

.logopicture {
    width: 100px;
    height: 100px;
}

#input,
#navinput {
    border: solid 2px #333;
    border-radius: 20px;
    padding: 0 10px;
    height: 35px;
    vertical-align: top;
    transition: all 0.4s ease 0.1s;
}

#input {
    width: 130px;
}

#navinput {
    width: 50px;
    margin-right: 7px;
    cursor: pointer;
}

#navinput::-webkit-input-placeholder {
    color: #000;
    font-weight: bold;
    font-size: 20px;
    text-align: center
}

#input:focus {
    width: 260px;
    border-color: #ffbf00;
    background-color: #ffbf00;
}

#navinput:focus {
    width: 100px;
    border-color: #ffbf00;
    background-color: #ffbf00;
}


.btn {
    outline: none;
    border: solid 2px;
    border-radius: 20px;
    width: auto;
    height: 40px;
    background-color: #3498db;
}

.btn:active {
    background-color: #ffbf00;
}

ul {
    display: flex;
    width: auto;
    height: auto;
    list-style: none;
    text-align: left;
    padding: 0 12px;
    flex-wrap: wrap
}

ul>li {
    /* border: solid 2px; */
    /* width: 900px; */
    width: 100%vw;
    height: auto;
    display: inline-block;
}

ul>li>a {
    /* border: solid 2px; */

    margin: 50px 6px;
}

ul>li>div {
    margin: 0 3px;
}

.region {
    border: 2px solid #EEE;
    width: auto;
}

.region-head {
    border: 2px solid #EEE;
    border-bottom: 0;
    margin-bottom: 0;
    padding: 5px 12px;
    text-align: left;
}

.region-body {
    width: 100%vw;
    padding: 2px;
}

.row {
    display: flex;
    /* border: solid 1px; */
    align-items: center;
}

.shadow-img-index {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    width: 110px;
    height: 146px
}

.bookname {
    text-align: center;
    width: 110px;
}
</style>