<template>
  <div id="app">
    <!-- <index></index> -->
    <!-- <top style="z-index: 1;"></top> -->
    <!-- <authorlist></authorlist> -->
    <!-- <booklist></booklist> -->
    <!-- <bookdetail></bookdetail> -->
    <top></top>
    <router-view></router-view>
    <!-- <demo></demo> -->
    <!-- <authorlist></authorlist> -->
  </div>
</template>

<script>
import index from './components/index';
import authordetail from './components/Authordetail';
import authorlist from './components/Authorlist';
import bookdetail from './components/Bookdetail';
import booklist from './components/Booklist';
import top from './components/Top';
import Navigation from './components/Navigation';
export default {
  name: 'App',
  components: {
    index,
    bookdetail,
    authordetail,
    authorlist,
    booklist,
    top,
    navigator
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
