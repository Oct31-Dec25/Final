<template>
    <div>
        <h1>third</h1>
        <h2>个人信息 {{ person }}</h2>
        <input type="text" v-model="name"><button @click='changename'>修改姓名(mutation)</button> <br>
        <input type="number" v-model="age"><button @click='changeage'>修改年龄(action)</button> <br>
        <button @click='next'>跳转回helloworld</button> <br>
        <button @click="actionstop">action 测试任务结束</button>
    </div>
</template>

<script>
export default {
    name: 'third',
    components: {},
    props: {},
    data() {
        return {
            name: "默认值",
            age: 18
        };
    },
    methods: {
        changename() { // 提交到mutation
            this.$store.commit('changename', this.name)
        },
        changeage() {  //提交到action
            this.$store.dispatch('changeageinfo', this.age)
        },
        next() {
            this.$router.push({ name: 'HelloWorld' })
        },
        actionstop() {
            this.$store.dispatch('actionstop', {
                test: "测试",
                success: () => {
                    console.log("已经完成，可以进行下一步了。")
                }
            })
        }
    },
    computed: {
        person() {
            return this.$store.state.person
        }
    },
    watch: {},
    created() { },
    mounted() { }
};
</script>

<style lang="css">
* {
    margin: 5pt;
}
</style>
