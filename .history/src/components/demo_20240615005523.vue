<template>
    <div>
        <h1>Data from API:</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error: {{ error.message }}</div>
        <pre v-if="data">{{ data }}</pre>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            data: null,
            
        };
    },
    created() {
        this.$axios({
            method: "get",
            url: "static/busin.json",
            headers: {},
            params: {},
            dataTypa: "json",
        })
            .then((res) => {
                console.log(res.data);
                console.log("访问数据成功");
                this.businlist = res.data
            })
            .catch(function (error) {
                console.log(error);
                alert("服务器连接异常");
                console.log("访问数据失败");
            });
    }

};
</script>

<style scoped>
/* 添加一些简单的样式 */
pre {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 4px;
}
</style>