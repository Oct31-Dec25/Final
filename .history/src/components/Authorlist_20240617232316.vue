<template>
    <div>
        {{ booklist[0].auth }}
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