import { onMounted } from 'vue'
import * as echarts from 'echarts'

export default () => {
  onMounted(() => {
    console.log('echarts mounted')
    const myChart = echarts.init(document.getElementById('echarts-main'))

    // 绘制图表
    myChart.setOption({
      // 标题展示
      title: {
        text: 'ECharts 入门示例'
      },
      // 控制鼠标滑动展示信息
      tooltip: {
        trigger: 'axis'
      },
      // 右上角展示的工具箱功能
      toolbox: {
        feature: {
          // 数据缩放
          dataZoom: {
            yAxisIndex: 'none'
          },
          // 数据窗口功能
          dataView: { readOnly: false },
          // 图类型切换
          magicType: { type: ['line', 'bar'] },
          // 重置功能
          restore: {},
          // 保存为图片
          saveAsImage: {}
        }
      },
      // x轴下方展示的类别信息
      xAxis: {
        name: '类别',
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      // y轴一般会自动设置
      yAxis: {},
      // 控制某个类别数据的展示
      legend: {
        data: ['销量', '价格']
      },
      // 数据对象，每个元素表示一个类别的数据展示（比如一条线或一组柱状图）
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
          markPoint: {
            data: [{ type: 'max' }, { type: 'min' }]
          }
        },
        {
          name: '价格',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
          markPoint: {
            data: [{ type: 'max' }, { type: 'min' }]
          }
        }
      ]
    })
  })
}
