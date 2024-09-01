<template>
    <div>
        <div v-for="item in authors" :key="item.id">
            <div>
                <div style="display: block">
                    <img src="../../images/avatar.png" alt="" style="height: 20px;width: 20px;position: relative;">
                    <router-Link :to="'/author/' + item.AuthorName">
                        {{ item.AuthorName }}
                    </router-Link>
                </div>
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
ul {
    list-style: none;
}

ul li {
    display: flex;
    margin-bottom: 5px;
}
</style>