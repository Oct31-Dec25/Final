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
        this.$store.dispatch('fetchbooks');
    },
    computed: {
        ...mapGetters(
        )
    },
}
</script>
<style></style>