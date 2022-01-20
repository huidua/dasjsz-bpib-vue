<template>
  <div v-if="isSeriesEmpty">
      <img src="" alt="">暂无数据
  </div>
  <!-- v-bind="$props" 可以将父组件的所有props下发给它的子组件,子组件需要在其props:{} 中定义要接受的props。-->
  <chart-pie v-else v-bind="$props" style="width: 100%; height:100%" />
</template>

<script>
import ChartPie from "./echart_pie.vue";
import { isEmpty } from "lodash";

export default {
  name: "EchartPie",
  components: { ChartPie },
  props: ChartPie.props, // 子组件中的所有参数和孙子组件中的参数保持一致
  computed: {
    // TODO 针对饼图数据是不是无效的判断
    isSeriesEmpty() {
      return isEmpty(this.seriesData) || this.seriesData.every((item) => !item.value);
    },
  },
};
</script>

<style>
</style>