<template>
    <div>
        <div v-for="item in authors" :key="item.id">
            <div style="border: solid 2px;border-radius: 20px;margin-bottom: 10px;padding: 10px;">
                <div style="display: flex;gap: 5px;margin-bottom: -5px;">
                    <img src="../../images/avatar.png" alt="" style="height: 20px;width: 20px;">
                    <router-Link :to="'/author/' + item.AuthorName">
                        {{ item.AuthorName }}
                    </router-Link>
                </div>
                <div>
                    <ul>
                        <li><span style="font-weight: bold;">作者简介 · · · · · ·</span></li>
                        <li style="font-style: italic;">{{ item.AuthorDescribe }}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><span style="font-weight: bold;cursor: pointer;"
                                @click="selectAuthor(item.AuthorName)">点击查看代表作品 · · · · · ·</span></li>
                        <li v-for="books in selectedBooks" :key="item.id">
                            <!-- <img :src="item.src" alt=""> -->
                            {{ books }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            selectedAuthorName: null
        }
    },
    created() {
        this.$store.dispatch('fetchauthor');
        this.$store.dispatch('fetchbooklist');
    },
    computed: {
        ...mapGetters(['authors', 'booklist']),
        selectedBooks() {
            return this.selectedAuthorName !== null ? this.booklist.fliter(book => book.author === this.selectedAuthorName) : [];
            return this.selectedAuthorId !== null ? this.getBooksByAuthorId(this.selectedAuthorId) : [];
            // getBooksByAuthorId: (state) => (authorId) => {
            //   return state.demolist.booklist.filter((book) => book.AuthorID === authorId);
            // }
        }
    },
    methods: {
        selectAuthor(authorname) {
            this.selectedAuthorName = authorname;
            console.log(this.selectedAuthorName)
        }
    }
}
</script>
<style>
ul {
    list-style: none;
    padding-left: 10px;
}

ul li {
    display: flex;
    margin-bottom: 10px;
    text-align: left;
}
</style>