<template>
    <div>
        <h1>second</h1>
        <h2>计算属性： {{ compcount }}</h2>
        <button @click="min">减少</button>
        <button @click="next">跳转回helloworld</button>
    </div>
</template>

<script>
export default {
    name: "second",
    components: {},
    props: {},
    data() {
        return {};
    },
    methods: {
        min() {
            this.$store.commit("reduce", 2);
        },
        next() {
            this.$router.push({ name: "HelloWorld" });
        },
    },
    computed: {
        compcount() {
            console.log("second--compcount1");
            return this.$store.getters.newCount;
            console.log(this.$store.getters.newCount)
        },
    },
    watch: {},
    created() { },
    mounted() { },
};
</script>

<style>
* {
    margin: 5pt;
}
</style>
