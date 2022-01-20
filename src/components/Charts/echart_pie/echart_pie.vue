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
    // 一般UI会规定一个统一的设计规范（比如颜色，字体，图例格式，位置等）
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

      // ====================   【配置】    ==========================
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
      console.log("生成图表的配置数据📊", fullOption);
      this.chart.setOption(fullOption, true);
    },
    /**
     * 当窗口缩放时，echart动态调整自身大小
     * 用到了防抖节流技术，节省性能消耗
     */
    handleWindowResize() {
      let vuecontent = this; //这里的this指的是VueComponent
      function debounce(func, wait = 0) {
        let timeid = null;

        return function(e) {
          let windowcontext = this; // 这里的this指的是Window
          let args = arguments;

          if (timeid) {
            clearTimeout(timeid);
          }
          timeid = setTimeout(function () {
            func.apply(windowcontext, args);
          }, wait);

        };
      }
      function handle() {
        if (!vuecontent.chart) return;
        console.log("窗口发生改变⏳");
        vuecontent.chart.resize();
      }
      return debounce(handle,150);
    },
  },
};
</script>

<style>
</style>