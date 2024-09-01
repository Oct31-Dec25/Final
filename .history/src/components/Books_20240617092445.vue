<template>
    <div>
        {{ books }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {}
    },
    created() {
        this.$store.dispatch('fetchbooks');
    },
    computed: {
        ...mapGetters(['books'])
    },
}
</script>
<style></style>