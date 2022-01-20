default_option.js 基础配置
echart_pie.vue    饼图
index.vue         饼图组件



# 数据合并
~~~ js
 return merge(
        {},
        BASIC_OPTION, // 基础配置
        // { color: COLOR_ARRAY },// 颜色配置
        { // 图例的格式，系列数据的设置
          legend: { formatter },
          series: [{ data: this.seriesData }],
        },
        this.extraOption // 扩展个性配置
      );
~~~