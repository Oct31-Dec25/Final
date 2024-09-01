<template>
    <div>
        <!-- <h1>Data from API:</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error: {{ error.message }}</div>
        <pre v-if="data">{{ data }}</pre> -->
        <div v-for="item in demolist" :key="item.id">
            {{ item.src }}
            {{ item.id }}
            {{ item.id }}
            <img :src="item.src" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            demolist: []
        };
    },
    created() {
        this.$axios({
            method: "get",
            url: "static/demo.json",
            headers: {},
            params: {},
            dataTypa: "json",
        })
            .then((res) => {
                console.log(res.data);
                console.log("访问数据成功");
                this.demolist = res.data
            })
            .catch(function (error) {
                console.log(error);
                alert("服务器连接异常");
                console.log("访问数据失败");
            });
    }

};
</script>

<style></style>