<template>
    <div style="display: flex;">
      <div>
        <nav>
          <router-link to="/" exact-active-class="active" @click.native="selected = 'home'">
            <a>Home</a>
          </router-link>
          <router-link to="/booklist" exact-active-class="active" @click.native="selected = 'books'">
            <a>BOOKS</a>
          </router-link>
          <router-link to="/authorlist" exact-active-class="active" @click.native="selected = 'authors'">
            <a>AUTHORS</a>
          </router-link>
          <router-link to="/news" exact-active-class="active" @click.native="selected = 'news'">
            <a>NEWS</a>
          </router-link>
          <router-link to="/contact" exact-active-class="active" @click.native="selected = 'contact'">
            <a>CONTACT</a>
          </router-link>
          <div class="animation" :class="selected"></div>
        </nav>
      </div>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selected: 'home'
      }
    },
    watch: {
      $route(to, from) {
        this.selected = to.name;
      }
    },
    created() {
      this.selected = this.$route.name;
    }
  }
  </script>
  
  <style>
  nav {
    top: -20px;
    position: relative;
    width: 400px;
    height: 40px;
    background-color: #34495e;
    border-radius: 8px;
    font-size: 0;
    box-shadow: 2px 2px 2px #000;
    margin-right: 20px;
    z-index: 1000;
  }
  
  nav a {
    width: 80px;
    height: 100%;
    line-height: 40px;
    font-size: 15px;
    display: inline-block;
    position: relative;
    z-index: 1;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    color: white;
    cursor: pointer;
  }
  
  nav .animation {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    transition: all 0.3s ease 0s;
    border-radius: 8px;
    width: 80px;
    left: 0;
    background-color: #1abc9c;
  }
  
  nav .animation.home {
    left: 0%;
    background-color: #1abc9c;
  }
  
  nav .animation.books {
    left: 20%;
    background-color: #e74c3c;
  }
  
  nav .animation.authors {
    left: 40%;
    background-color: #3498db;
  }
  
  nav .animation.news {
    left: 60%;
    background-color: #9b59b6;
  }
  
  nav .animation.contact {
    left: 80%;
    background-color: #e67e22;
  }
  </style>
  