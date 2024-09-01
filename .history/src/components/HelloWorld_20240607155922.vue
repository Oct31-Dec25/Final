<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>计算属性1： {{ compcount1 }}</h2>
    <button @click="add">增加</button>
    <button @click="next">跳转second</button>
    <button @click="nextthird">跳转third</button>
    <button @click="nextindex">index</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods: {
    add() {
      console.log("add");
      this.$store.commit("ADDIN");
    },
    next() {
      this.$router.push({ name: "second" });
    },
    nextthird() {
      this.$router.push({ name: "third" });
    },
    nextthird() {
      this.$router.push({ name: "third" });
    },
  },
  computed: {
    compcount1() {
      return this.$store.state.count;
    },
    x() {
      return this.$store.getters.newCount;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 5pt;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
