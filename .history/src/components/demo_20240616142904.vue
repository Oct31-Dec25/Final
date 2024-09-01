<template>
    <div>
        <!-- <h1>Data from API:</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">Error: {{ error.message }}</div>
        <pre v-if="data">{{ data }}</pre> -->
        <div v-for="item in demolist.book" :key="item.id" style="display: flex;justify-content: center;">
            {{ item }}
            <img :src="item.src" alt="" title="item.name,item.language" style="cursor: pointer;">
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
        this.$store.dispatch('fetchDemoList');
    },
    computed: {
        demolist() {
            return this.$store.state.demolist;
        }
    }

};
</script>

<style></style>