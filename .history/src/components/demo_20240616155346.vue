<template>
    <div>
        {{ Authors }}

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
        ...mapGetters(["demolist", "Author", "Categories"]),
        ...mapActions
        Authors() {
            return this.$store.state.Authors;
        },
        Categories() {
            return this.$store.state.Categories;
        },
    },
    mounted: {
        this.fetchAuthors
    }

};
</script>

<style></style>