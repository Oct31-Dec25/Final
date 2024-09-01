<template>
    <div>
        <div v-for="item in su" :key="item.id">
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
        this.$store.dispatch('fetchauthor');
    },
    computed: {
        ...mapGetters(['authors']),

    },
}
</script>
<style></style>