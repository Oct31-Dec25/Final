<template>
    <div>
        {{ demolist.booklist }}
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
        {{ Categories }}
    </div>
</template>

<script>
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