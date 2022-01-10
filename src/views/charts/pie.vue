<template>
  <div>
    <h1>pieChart</h1>
    <div class="chart-container">
      <echart-pie
        :series-data="dataList"
        :extra-option="extraOption"
      ></echart-pie>
    </div>
  </div>
</template>

<script>
import EchartPie from "@/components/Charts/echart_pie";
export default {
  name: "pie",
  components: { EchartPie },
  data() {
    return {
      dataList: [
        {
          name: "西瓜",
          value: 20,
        },
        {
          name: "橘子",
          value: 13,
        },
        {
          name: "杨桃",
          value: 33,
        },
      ],
      extraOption: {
        color: ["#fe883a", "#2d90d1", "#f75981", "#90e2a9"],
      },
    };
  },
};
</script>

<style>
</style>