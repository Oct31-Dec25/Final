<template>
    <div>
        <div v-for="item in authors" :key="item.id">
            <div style="border: solid 2px;border-radius: 20px;margin-bottom: 10px;pa">
                <div style="display: flex;gap: 5px;margin-bottom: -5px;">
                    <img src="../../images/avatar.png" alt="" style="height: 20px;width: 20px;">
                    <router-Link :to="'/author/' + item.AuthorName">
                        {{ item.AuthorName }}
                    </router-Link>
                </div>
                <div>
                    <ul>
                        <li><span style="font-weight: bold;">作者简介 · · · · · ·</span></li>
                        <li style="font-style: italic;">{{ item.AuthorDescribe }}</li>
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
    padding-left: 10px;
}

ul li {
    display: flex;
    margin-bottom: 10px;
    text-align: left;
}
</style>