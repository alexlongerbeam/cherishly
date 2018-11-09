function initPage(){
	$(".addButton").click(
		function(){showElement(".popupWindow");}, 
	);

	$("#uploadButton").click(
		function(){hideElement(".popupWindow");}
	);
}

function showElement(x){
	$(x).css("opacity", ".9");
	$(x).css("z-index", "+1");
}

// /* If you click elseßwhere */
function hideElement(x){
	$(x).css("opacity", "0.0");
	$(x).css("z-index", "0");
}