/*
	yield 其实提供一种可以暂停执行的函数。yield 表达式就是暂停标志

	遇到 yield 表达式, 暂停执行后面的操作, 并将紧跟在 yield 后面的那个表达式的值, 作为返回的对象的 value 属性值。
	下一次调用 next 方法时, 再继续往下执行, 直到遇到下一个 yield 表达式。
	如果没有遇到新的 yield 表达式, 就一直运行到函数结束, 直到 return语句为止, 并将return语句后的表达式的值, 作为返回对象的value 属性值
	如果没有 return语句, 则返回的对象的 value 属性值为 undefined。

	yield 表达式后面的表达式, 只有当调用 next 方法、内部指针指向该语句时才会执行。
*/ 





