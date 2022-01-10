<template>
  <div>
      <h1>echarts</h1>
      <div class="chart-container">
          <chart></chart>
      </div>
  </div>
</template>

<script>
import Chart from '@/components/Charts/LineMarker'
export default {

    name: 'LineChart',
    components: {Chart}
}
</script>

<style>

</style>