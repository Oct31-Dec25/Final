<template>
    <div>
        <div v-for="item in authors" :key="item.id">
            <router-Link :to="'/author' + item.AuthorName">
                <div>
                    {{ item.AuthorName }}
                    <br>
                    {{ item.AuthorDescribe }}
                </div>
            </router-Link>
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