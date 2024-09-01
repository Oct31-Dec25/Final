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
        <!-- <div v-for="item in $store.state.demolist.booklist">
            {{ item }}
        </div> -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {

    data() {
        return {
        };
    },
    // created() {
    //     this.$store.dispatch('fetchDemoList');
    //     this.$store.dispatch('fetchAuthors');
    //     this.$store.dispatch('fetchCategories');
    // },
    methods: {
        ...mapActions(['fetchDemoList', 'fetchAuthors', 'fetchCategories']),
        this.fetchDemoList
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