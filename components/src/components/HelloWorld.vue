<template>
  <div class="hello">
    <i-button size="large"  >按钮</i-button>
    <i-menu ></i-menu>
  </div>
</template>

<script>
import Button from "./com/buttom";
import Menu from "./com/menu";
export default {
  data() {
    return {

    };
  },
  methods:{
    submit(){
      this.$toast("登录成功","top")
    }
  },
  components:{
    "i-button":Button,
    "i-menu":Menu
  }
};
</script>

<style>
</style>
