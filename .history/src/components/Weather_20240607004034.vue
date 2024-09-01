<template>
    <div>
        <button @click="weather">获取天气</button> <br /><br />
        <p>天气情况</p>
        <ul>
            <li v-for="(item, key) in comw" :key="key">
                {{ item }}
            </li>
        </ul>
        <p>下面是跨域的简单处理</p>
        <button @click="wr">获取天气</button> <br /><br />
        <p>天气情况</p>
        <ul>
            <li v-for="(item, key) in comw" :key="key">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {},
    data() {
        return {};
    },
    methods: {
        weather() {
            console.log("开始获取天气");
            this.$store.dispatch("weatheraxios");
        },
        wr() {
            console.log("(跨域)开始获取天气");
            this.$store.dispatch("ws");
        },
        //   test(){
        //       console.log("开始测试post")
        //       this.$store.dispatch("axiospost")
        //   }
    },
    computed: {
        comw() {
            // console.log(this.$store.state.weatherdata)
            return this.$store.state.weatherdata.forecast;
        }
    },
    watch: {},
    created() { },
    mounted() { },
};
</script>

<style scoped>
ul {
    text-align: left;
}
</style>
