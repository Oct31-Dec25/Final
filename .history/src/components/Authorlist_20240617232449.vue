<template>
    <div>
        <div v-for="item in booklist" :key="item.id">
            {{ item.author }}
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
    },
}
</script>
<style></style>