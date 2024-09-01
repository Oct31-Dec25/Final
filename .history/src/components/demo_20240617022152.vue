<template>
    <!-- TODO通过AuthorID在Books中找到对应的Book -->
    <!-- <div>
        <div v-for="author in booklist" :key="author.id">
            <br>
            <div @click="selectAuthor(author.AuthorID)">
                {{ author }}
            </div>
            <br>
        </div>
        <ul>
            <li v-for="item in selectedBooks" :key="item.id">
                <img :src="item.src" alt="">
            </li>
        </ul>
    </div> -->
    <div>
        <router-Lin></router-Lin>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            selectedAuthorId: null
        };
    },
    created() {
        this.$store.dispatch('fetchDemoList');
        this.$store.dispatch('fetchAuthors');
        this.$store.dispatch('fetchCategories');
    },
    computed: {
        ...mapGetters(["demolist", "Authors", "Categories", 'getBooksByAuthorId', 'booklist']),
        selectedBooks() {
            return this.selectedAuthorId !== null ? this.getBooksByAuthorId(this.selectedAuthorId) : [];
        }
    },
    methods: {
        selectAuthor(authorId) {
            this.selectedAuthorId = authorId;
        }
    }
};
</script>

<style></style>