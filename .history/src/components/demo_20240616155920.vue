<template>
    <div>
        <div v-for="item in Authors" :key="item.id">
            <br>
            <div @click="search">
                {{ item.AuthorID }}
            </div>
            <br>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

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
        ...mapGetters(["demolist", "Authors", "Categories"]),
    },
    methods:{
        search
    }
};
</script>

<style></style>