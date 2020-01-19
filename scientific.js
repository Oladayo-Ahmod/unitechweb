function toggle(){
	document.getElementById("toggle").classList.toggle("basket");
}
function equal(){
	var res = document.getElementById("result").innerHTML;
	var result = eval(res).toLocaleString("en");
	document.getElementById("result").innerHTML = result;
}
function one(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 1;
	}
	else if (res.innerHTML == 1) {
		res.innerHTML += 1;
	}
	else{
		res.innerHTML +=1;
	}
}
function two(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 2;
	}
	else if (res.innerHTML == 2) {
		res.innerHTML += 2;
	}
	else{
		res.innerHTML +=2;
	}
}
function three(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 3;
	}
	else if (res.innerHTML == 3) {
		res.innerHTML += 3;
	}
	else{
		res.innerHTML +=3;
	}
}
function four(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 4;
	}
	else if (res.innerHTML == 4) {
		res.innerHTML += 4;
	}
	else{
		res.innerHTML +=4;
	}
}
function five(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 5;
	}
	else if (res.innerHTML == 5) {
		res.innerHTML += 5;
	}
	else{
		res.innerHTML +=5;
	}
}
function six(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 6;
	}
	else if (res.innerHTML == 6) {
		res.innerHTML += 6;
	}
	else{
		res.innerHTML +=6;
	}
}

function seven(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 7;
	}
	else{
		res.innerHTML +=7;
	}
}
function eight(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 8;
	}
	else if (res.innerHTML == 8) {
		res.innerHTML += 8;
	}
	else{
		res.innerHTML +=8;
	}
}
function nine(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 9;
	}
	else if (res.innerHTML == 9) {
		res.innerHTML += 9;
	}
	else{
		res.innerHTML +=9;
	}
}
function zero(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = 0;
	}
	else if (res.innerHTML == 0) {
		res.innerHTML += 0;
	}
	else{
		res.innerHTML +=0;
	}
}
function point(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = ".";
	}
		else if (res.innerHTML==0) {
			res.innerHTML += ".";
		}
		else{
			res.innerHTML +=".";
		}
}
function del(){
	var res = document.getElementById("result");
	res.innerHTML = res.innerHTML.substr(0,res.innerHTML.length-1);
	if (res.innerHTML == "") {
		res.innerHTML = "";
	}
}
function divide(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML += "/";
	}
}
function multiply(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML +="*"; 
	}
}
function plus(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML +="+"; 
	}
}
function minus(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML +="-"; 
	}
}
function sqrt(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.sqrt(res.innerHTML);
	}
}
function sin(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else if (res.innerHTML == 0) {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.sin(res.innerHTML);
	}
}
function tan(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else if (res.innerHTML == 0) {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.tan(res.innerHTML);
	}
}
function cos(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else if (res.innerHTML == 0) {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.cos(res.innerHTML);
	}
}
function ac(){
	var res = document.getElementById("result");
	res.innerHTML = "";
}
function percent(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else if (res.innerHTML == 0) {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = "%";
	}
}
function In(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else if (res.innerHTML == 0) {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.log(res.innerHTML);
	}
}
function log(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else if (res.innerHTML == 0) {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.log10(res.innerHTML);
	}
}
function pile(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.PI;
	}
}
function e(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.E;
	}
}
function raise(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else if (res.innerHTML == 0) {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.pow(res.innerHTML,res.innerHTML);
	}
}
function inv(){
	document.getElementById("togglelast").classList.toggle("togglelast");
}
function arcsine(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.asin(res.innerHTML);
	}	
}
function arccos(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.acos(res.innerHTML);
	}	
}
function arctan(){
	var res = document.getElementById("result");
	res.innerHTML += "Arcsine";
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.atan(res.innerHTML);
	}	
}
function ten(){
	var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.pow(res.innerHTML,10);
	}		
}
function exp(){
var res = document.getElementById("result");
	if (res.innerHTML == "infinity") {
		res.innerHTML = "";
	}
	else{
		res.innerHTML = Math.exp(res.innerHTML);
	}	
}	