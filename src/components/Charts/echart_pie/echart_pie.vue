<template>
  <div class="chart"></div>
</template>

<script>
import * as echarts from "echarts";
import { BASIC_OPTION } from "./default_option";
import { merge } from "lodash";

export default {
  name: "ChartPie",
  props: {
    // 对应echarts饼图配置中series[0].data
    seriesData: {
      type: Array,
      required: true,
      default: () => [],
    },
    // 特殊定制配置
    // 一般UI回归到一个统一的设计规范（比如颜色，字体，图例格式，位置等）
    // 但不排除某个图表会和设计规范不同，需要特殊定制样式，所以开放这个配置，增强灵活性
    extraOption: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    seriesData: {
      deep: true,
      handler() {
        this.updateChartView();
      },
    },
  },
  mounted() {
    this.chart = echarts.init(this.$el);
    this.updateChartView(); // 更新视图
    window.addEventListener("resize", this.handleWindowResize());
  },
  methods: {
    /**
     * 将业务数据加入到基础样式配置中
     * @returns {Object} 完整的echart配置
     */
    assembleDataToOption() {
      const formatter = (name) => {
        const total = this.seriesData.reduce((acc, cur) => acc + cur.value, 0);
        const data = this.seriesData.find((item) => item.name === name) || {};
        const percent = data.value
          ? `${Math.round((data.value / total) * 100)}%`
          : "0%";

        return `${name} ${percent}`;
      };

      console.log("i(´▽`ʃ♡ƪ)图表系列数据", this.seriesData);

      return merge(
        {},
        BASIC_OPTION,
        // { color: COLOR_ARRAY },
        {
          legend: { formatter },
          series: [{ data: this.seriesData }],
        },
        this.extraOption
      );
    },
    /**
     * 更新echart视图
     */
    updateChartView() {
      if (!this.chart) return;

      const fullOption = this.assembleDataToOption();
      console.log("io(*^▽^*)┛生成图表的配置数据", fullOption);
      this.chart.setOption(fullOption, true);
    },
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.chart) return;
      this.chart.resize();
    },
  },
};
</script>

<style>
</style>