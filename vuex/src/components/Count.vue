<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{count}}</h3>
    <hr>
    <h3>{{$store.state.a.count}}</h3>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  computed: {
    ...mapGetters(["count"]),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(["reduce"]),
    ...mapActions(['addAction','reduceAction'])
  }
  ,
  // computed:mapState({
  //   count:state => state.count
  // }),

  // computed:{
  //   count(){
  //     return this.$store.state.count
  //   }
  // },
  store
};
</script>
