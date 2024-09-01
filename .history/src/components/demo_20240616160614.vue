<template>
    <div>
        <div v-for="author in Authors" :key="author.id">
            <br>
            <div @click="search(author.AuthorID)">
                {{ author.AuthorName }}
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
    methods: {
        search() {

        }
    }
};
</script>

<style></style>