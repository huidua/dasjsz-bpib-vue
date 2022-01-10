<template>
  <!-- v-bind="$props" 可以将父组件的所有props下发给它的子组件,子组件需要在其props:{} 中定义要接受的props。-->
  <chart-pie v-bind="$props" />
</template>

<script>
import ChartPie from "./echart_pie.vue";

export default {
  name: "EchartPie",
  components: { ChartPie },
  props: ChartPie.props, // 子组件中的所有参数和孙子组件中的参数保持一致
  data() {
    return {
      ppp: ChartPie.props,
    };
  },
  computed: {
    // TODO 针对饼图数据是不是无效的判断
    isSeriesEmpty() {
      return false;
    },
  },
   created() {
    console.log(this.ppp);
  },
};
</script>

<style>
</style>