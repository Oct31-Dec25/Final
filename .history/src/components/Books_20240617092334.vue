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
    },
    computed: {
        ...mapState({
            
        })
    },
}
</script>
<style></style>