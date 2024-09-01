<template>
    <div>
        <div v-for="item in demolist" :key="item.id">
            {{ item }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
        };
    },
    created() {
        this.$store.dispatch('fetchDemoList',);
    },
    computed: {
        demolist() {
            return this.$store.state.demolist;
        }
    }

};
</script>

<style></style>