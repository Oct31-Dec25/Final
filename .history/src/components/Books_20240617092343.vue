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
        this.$store.dispatch('fetchBo0ks');
    },
    computed: {
        ...mapState({

        })
    },
}
</script>
<style></style>