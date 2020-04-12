window.onkeydown = function (e){
	if (e.ctrlKey && e.keyCode == 83){ //屏蔽ctrl+s保存
		//alert('禁止使用ctrl+s');
		//e.preventDefault();
		//e.returnValue = false;
		return false;
	}else if (e.ctrlKey && e.keyCode == 80){ //屏蔽ctrl+p打印
		//alert('禁止使用ctrl+p');
		//e.preventDefault();
		//e.returnValue = false;
		return false;
	}
};