<template>
    <div>
        <div v-for="author in Authors" :key="author.id">
            <br>
            <div @click="selectAuthor(author.AuthorID)">
                {{ author.AuthorName }}
            </div>
            <ul>
                <li v-for="book in selectedBooks" :key="book.BookID">{{ book.Title }}</li>
            </ul>
            <br>
        </div>

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
        ...mapGetters(["demolist", "Authors", "Categories"]),
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