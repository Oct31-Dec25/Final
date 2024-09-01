<template>
    <div>
        <div v-for="item in authors" :key="item.id">
            <div>
                {{ item.AuthorName }}
                <br>
                {{ item.AuthorDescribe }}
            </div>
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