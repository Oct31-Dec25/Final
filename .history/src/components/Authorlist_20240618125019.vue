<template>
    <div>
        <div v-for="item in booklist.slice(0, 16)" :key="item.id">
            {{ item.author }}
            <!-- <div v-for="item in book(item.author)" :key="item.id">
                {{ item }}
            </div> -->
            <!-- {{ book(item.author) }} -->
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {}
    },
    created() {
        this.$store.dispatch('fetchbooklist');
    },
    computed: {
        ...mapGetters(['booklist']),
        book(name) {
            return this.booklist.find(book => book.author === name);
        }
    },
}
</script>
<style></style>