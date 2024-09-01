<template>
    <div>
        <!-- {{ demolist.booklist }}
        <br>
        <br>
        <br>
        <br>
        <br>
        {{ Authors }}
        <br>
        <br>
        <br>
        <br>
        <br>
        {{ Categories }} -->
        <div v-for="item in $store.state.dem"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {

    data() {
        return {
        };
    },
    created() {
        this.$store.dispatch('fetchDemoList');
        this.$store.dispatch('fetchAuthors');
        this.$store.dispatch('fetchCategories');
    },
    computed: {
        // demolist() {
        //     return this.$store.state.demolist;
        // },
        // ...mapState({
        //     demolist: state => state.demolist
        // }),
        // Authors() {
        //     return this.$store.state.Authors;
        // },
        // Categories() {
        //     return this.$store.state.Categories;
        // },
    }

};
</script>

<style></style>