<template>
    <div style="margin-left:auto;margin-right:auto;width:80vw;margin-top:0;">
        <div style="display: flex;justify-content: space-between;">
            <!-- TODO 设置logo -->
            <img src="../../images/booklogo.png" alt="" style="height: 50px;">

            <!-- TODO设置导航 -->
            <div class="center" style="margin-bottom: 10px;">
                <div style="" class="center search">
                    <input id="navinput" type="text" :placeholder="placeholderText1" @click="homeClick">
                    <input id="navinput" type="text" :placeholder="placeholderText2" @click="bookClick">
                    <input id="navinput" type="text" :placeholder="placeholderText3" @click="authorClick">
                </div>
            </div>

            <!-- TODO 设置搜索框 -->
            <div class="center" style="margin-bottom: 10px;">
                <div style="" class="center search">
                    <input id="input" type="text" placeholder="输入你要查找的书籍" ref="getValue" v-model="searchQuery">
                    <button class="btn" type="submit" @click="subbmitButton">
                        <img src="../../images/search.png" alt="" style="height: 25px;width: 25px;">
                    </button>
                </div>
            </div>
        </div>
        <div></div>
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
    methods: {
        subbmitButton() {
            console.log(this.$refs.getValue.value)
            if (this.searchQuery.trim()) {
                this.$router.push(`/bookdetail/${encodeURIComponent(this.searchQuery)}`);
            } else {
                alert('请输入书籍名称');
            }
        },
        homeClick() {
            this.$router.push('/');
        },
        bookClick() {
            this.$router.push('/booklist');
        },
        authorClick() {
            this.$router.push('/authorlist');
        }
    },


}
</script>
<style>
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
</style>