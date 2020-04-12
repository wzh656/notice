//屏蔽ctrl+p打印
window.onkeydown = function (e){
	if (e.ctrlKey && e.keyCode == 80){
		//alert('禁止使用ctrl+s');
		//e.preventDefault();
		//e.returnValue = false;
		return false;
	}
};