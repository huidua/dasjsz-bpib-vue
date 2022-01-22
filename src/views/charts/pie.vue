<template>
  <div>
    <h1></h1>
    <div
      class="chart-container"
      style="width: 50%; height: 500px"
    >
      <echart-pie
        v-drag="greet"
        :series-data="dataList"
        :extra-option="extraOption"
      ></echart-pie>
    </div>
  </div>
</template>

<script>
import EchartPie from "@/components/Charts/echart_pie";

//  ========================== 样式 ==========================
import { FEATURE as BarStyle } from "@/components/Charts/echart_pie/features/option1.js";

import drag from '@/directive/drag.js'

export default {
  name: "pie",
  components: { EchartPie },
  directives: {
    drag
  },
  data() {
    return {
      dataList: [],
      extraOption: {},
    };
  },
  created() {

    // 数据
    const data = [
      { name: "西瓜", value: 20 },
      { name: "橘子", value: 13 },
      { name: "杨桃", value: 33 },
    ];
    // 样式
    const style = Object.assign({}, BarStyle, {
      title: { text: "合并之后的对象" },
    });

    this.dataList = data;
    this.extraOption = style;
  },
  mounted() {
    console.log("mounted执行");
  },
  methods: {
    greet(val) {
    },
  },
};
</script>

<style>
</style>