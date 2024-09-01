<template>
    <div>
        {{ booklist }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {}
    },
    created() {
        this.$store.dispatch('fetchDemoList');
        this.$store.dispatch('fetchAuthors');
        this.$store.dispatch('fetchCategories');
    },
    computed: {
        ...mapState({
            
        })
    },
}
</script>
<style></style>