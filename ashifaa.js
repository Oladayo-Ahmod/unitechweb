alert("This is the developed by The Unitech");
var arr = ["modern.jpg","pro_konka.png","pro_taam.jpg","naturalherbal.png","tea.png","contact.png"];

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