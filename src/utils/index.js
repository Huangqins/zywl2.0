// 工具方法集
// debounce
export  function debounce(fuc, wait, immediate) {
	let timeout, args, context, timestamp, result
	const later = function() {
		// 距上次触发时间间隔
		const last = +new Date() - timestamp
		// 上次被包装函数调用时间间隔last小于设定时间间隔wait
		if (last < wait && last > 0) {
			// 延迟执行被包装函数,使其执行周期最低按照wait的频率执行
			timeout = setTimeout(later, wait - last)
		} else {
			timeout = null
			// 如果设定immediate为true,因为开始边界已经调用过了此处无需调用
			if (!immediate) {
				result = func.apply(context, args)
				if (!timeout) context = args = null
			}
		}
	}
	return function(...args) {
		context = this
		timestamp = +new Date()
		const callNow = immediate && !timeout
		// 如果延时不存在，重新设定延时
		if (!timeout) timeout = setTimeout(later, wait)
		if (callNow) {
			result = func.apply(context, args)
			context = args = null
		}
		return result
	}
}