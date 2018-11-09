function initPage(){
	$(".addButton").click(
		function(){showElement(".pictureUpload");}, 
	);

	$(".pictureUpload").click(
		function(){hideElement(".pictureUpload");}
	);
}

function showElement(x){
	$(x).css("opacity", ".8");
	$(x).css("z-index", "+1");
}

// /* If you click elseßwhere */
function hideElement(x){
	$(x).css("opacity", "0.0");
	$(x).css("z-index", "0");
}