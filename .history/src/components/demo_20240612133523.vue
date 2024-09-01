<template>
    <div>
        <h1>Data from API:</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error: {{ error.message }}</div>
        <pre v-if="data">{{ data.result.newslist[0] }}</pre>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            data: null,
            loading: true,
            error: null
        };
    },
    mounted() {
        // 发送 HTTP 请求
        axios.get('http://localhost:8080/')
            .then(response => {
                this.data = response.data;
                this.loading = false;
            })
            .catch(error => {
                this.error = error;
                this.loading = false;
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