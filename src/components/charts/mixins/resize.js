import { debounce } from '@/utils'

export default {
	mounted() {
		this._resizeHanlder = debounce(() => {
			if (this.chart) {
				this.chart.resize()
			}
		},100)
		window.addEventListener('resize', this._resizeHanlder)
	},
	beforeDestory() {
		window.removeEventListener('resize', this._resizeHanlder)
	}
}
