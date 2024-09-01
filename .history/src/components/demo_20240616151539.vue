<template>
    <div>
        <div v-for="item in demolist.booklist" :key="item.id">
            {{ item }}
        </div>
        <div v-for="item in Authors" :key="item.id">
            {{ item }}
        </div>
        <div v-for="item in Categories" :key="item.id">
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
        this.$store.dispatch('fetchDemoList');
        this.$store.dispatch('fetchAuthors',);
        this.$store.dispatch('fetchCategories');
    },
    computed: {
        demolist() {
            return this.$store.state.demolist;
        },
        Authors() {
            return this.$store.state.Authors;
        },
        Categories() {
            return this.$store.state.Categories;
        },
    }

};
</script>

<style></style>