
/* sliding avenue */
 var arr = ["modern.jpg","unitechone.jpg","clean.jpg","geekpointone.jpg","geekpointthree.png","geekpointfour.jpg"];
 num = 0;
 function next(){
	var sliders = document.getElementById("sliders");
	num++;
	if(num >= arr.length){
		num = 0;
	}
	sliders.src = arr[num];
}
function prev(){
	var sliders = document.getElementById("sliders");
	num--;
	if(num < 0){
		num = arr.lenghth-1;
	}
	sliders.src = arr[num];
}

function change(){
	document.getElementById("aside").classList.toggle("asidess");
	document.getElementById("charset").classList.toggle("hand");
}
function submit(){
	document.getElementById("form").classList.toggle("form");
}
function readingmode(){
	document.getElementById("spantoggle").classList.toggle('toggling');
}
