<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/jiang website is very good">params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/198/vue.js">goParams</router-link>|
    <router-link to="/Hi1">Hi1</router-link>|
    <router-link to="/jiang">jiang</router-link>|
    <!-- <router-link to="/bbb">随便写的</router-link> -->

    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div>
      <button @click="goBack">后退</button>
      <button @click="go">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    goBack(){
      this.$router.go(-1);

    },
    go(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
