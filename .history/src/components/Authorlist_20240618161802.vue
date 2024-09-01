<template>
    <div>
        <div v-for="item in authors" :key="item.id">
            <div>
                <router-Link :to="'/author/' + item.AuthorName">
                    {{ item.AuthorName }}
                </router-Link>
                <br>
                <div>
                    <ul>
                        <li><span>作者简介 · · · · · ·</span></li>
                        <li>{{ item.AuthorDescribe }}</li>
                    </ul>


                </div>
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
<style>
body{
    ju
}
ul {
    list-style: none;

}

ul li {
    display: flex;
    align-items: left;
    justify-content: left;
}
</style>