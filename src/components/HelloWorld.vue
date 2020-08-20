<template>
  <div class="hello">
    <!-- https://www.w3cplus.com/vue/renderless-components-in-vuejs.html -->
    <h3>1.函数式组件和普通组件的渲染速度</h3>
    <el-button size="mini" @click="initData()" style="margin-bottom:20px;">函数式组件</el-button>
    <el-button size="mini" @click="initData()" style="margin-bottom:20px;">普通组件</el-button>
    <renderlessList :value="listData"></renderlessList>
    <commonList :value="listData"></commonList>
  </div>
</template>

<script>
import renderlessList from "@/components/renderless/renderless-list.js";
import commonList from "@/components/common-list.js";
export default {
  name: "HelloWorld",
  components: { renderlessList, commonList },
  props: {
    msg: String,
  },
  data() {
    return {
      listData: [],
      value: "",
      startTime: 0,
      endTime: 0,
    };
  },
  beforeUpdate() {
    this.startTime = new Date().valueOf();
    console.log(this.startTime);
  },
  updated() {
    this.endTime = new Date().valueOf();
    console.log(this.endTime);
    console.log(this.endTime - this.startTime);
  },
  methods: {
    initData() {
      this.listData = Array.from({ length: 1000 }, (index) => {
        return { index: index + 1, text: Math.random() };
      });
      // if (!this.isRenderLess) {
      //   this.listData = Object.freeze(this.listData);
      // }
    },
    init() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0;
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
