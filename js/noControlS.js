//屏蔽ctrl+s保存
window.onkeydown = function (e){
	if (e.ctrlKey && e.keyCode == 83){
		//alert('禁止使用ctrl+s');
		//e.preventDefault();
		//e.returnValue = false;
		return false;
	}
};