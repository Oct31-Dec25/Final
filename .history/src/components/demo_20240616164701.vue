<template>
    <!-- TODO通过AuthorID在Books中找到对应的Book -->
    <div>
        <div v-for="author in Authors" :key="author.id">
            <br>
            <div @click="selectAuthor(author.AuthorID)">
                {{ author.AuthorName }}
            </div>
            <br>
        </div>
        <div v-for="book in  selectedBooks " :key="book.id">
            id:{{ book.id }}
            <br>
            name:{{ book.name }}
            <br>
            {{ book.src }}
            <br>
            <img :src="../../images/booklist-update/Elixir in Action 3rd Edition.png
" alt="">
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
        ...mapGetters(["demolist", "Authors", "Categories", 'getBooksByAuthorId']),
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