<template>
    <div>
        <div v-for=""></div>
        {{ booklist[0].author }}
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