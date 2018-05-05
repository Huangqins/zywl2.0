<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script type="text/javascript">
import echarts from 'echarts'
import resize from './mixins/resize'
export default {
	mixins: [resize],
	props: {
		className: {
			type: String,
			default: 'chart'
		},
		id: {
			type: String,
			default: 'chart'
		},
		width: {
			type: String,
      			default: '200px'
		},
		height: {
		      type: String,
		      default: '200px'
		}
	},
	data() {
	    return {
	      chart: null
	    }
	  },
	 mounted() {
	 	this.initChart()
	 },
	 beforeDestory() {
	 	if (!this.chart) {
	 		return
	 	}
	 	this.chart.dispose()
	 	this.chart  = null
	 },
	 methods: {
	 	initChart() {
	 		this.chart = echarts.init(document.getElementById(this.id))
	 	}
	 }
}
</script>