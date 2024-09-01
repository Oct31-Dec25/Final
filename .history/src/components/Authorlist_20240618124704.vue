<template>
    <div>
        <div v-for="item in booklist.slice(0, 16)" :key="item.id">
            {{ item.author }}
            <div ></div>
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