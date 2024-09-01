<template>
    <div style="margin-top: 10px;">
        <div v-for="item in authorsWithBooks" :key="item.id" class="css-author">
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
                        <li><span style="font-weight: bold;cursor: pointer;">代表作品 · · · · · ·</span></li>
                    </ul>
                </div>

                <div>
                    <ul style="display: flex;">
                        <li v-for="book in item.books" :key="book.id" style="width: 117px;">
                            <router-link :to="'/bookdetail/' + book.name">
                                <img :src="book.src" alt="" class="shadow-img-authorlist" :title="book.name">
                            </router-link>
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
        authorsWithBooks() {
            return this.authors.map(author => {//使用.map扩展authors
                return {
                    ...author,
                    books: this.booklist.filter(book => book.author === author.AuthorName)
                };
            });
        }
    },
}
</script>
<style>
ul {
    list-style: none;
    padding-left: 10px;
    flex-wrap: wrap
}

ul li {
    /* display: flex; */
    margin-bottom: 10px;
    text-align: left;
}



.shadow-img-authorlist {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    width: 110px;
    height: 146px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.shadow-img-authorlist:hover {
    box-shadow: 7px 7px 3px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0.001s;
    transform: translate(0, -10px);
    transform: scale(1.2)
}
</style>