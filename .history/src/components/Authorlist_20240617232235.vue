<template>
    <div>
        {{ booklist }}
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {}
    },
    created() {
        this.$store.dispatch('fetchbooklist');
    },
    computed: {
        ...mapGetters(['booklist']),
        book() {
            const classifyitem = this.$route.params.classifyitem;
            return this.booklist.filter(book => {
                return book.language === classifyitem || book.publicationYear === Number(classifyitem) || book.Categories === classifyitem;
            });
        }
    },
}
</script>
<style></style>