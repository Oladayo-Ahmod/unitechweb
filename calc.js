
function ac(){
	var ins = document.getElementById("current");
	ins.innerHTML = 0;
}
function one(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 1;
	}
	else if(ins.innerHTML == 1){
		ins.innerHTML += 1;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 1;
	}
	else{
		ins.innerHTML += 1;
	}
}
function two(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 2;
	}
	else if(ins.innerHTML == 2){
		ins.innerHTML += 2;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 2;
	}
	else{
		ins.innerHTML += 2;
	}
}
function three(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 3;
	}
	else if(ins.innerHTML == 3 ){
		ins.innerHTML += 3;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 3;
	}
	else{
		ins.innerHTML += 3;
	}
}

function four(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 4;
	}
	else if(ins.innerHTML == 4){
		ins.innerHTML += 4;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 4;
	}
	else{
		ins.innerHTML += 4;
	}
}

function five(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 5;
	}
	else if(ins.innerHTML == 5){
		ins.innerHTML += 5;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 5;
	}
	else{
		ins.innerHTML += 5;
	}
}
function six(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 6;
	}
	else if(ins.innerHTML == 6){
		ins.innerHTML += 6;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 6;
	}
	else{
		ins.innerHTML += 6;
	}
}
function seven(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 7;
	}
	else if(ins.innerHTML == 7){
		ins.innerHTML += 7;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 7;
	}
	else{
		ins.innerHTML += 7;
	}
}
function eight(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 8;
	}
	else if(ins.innerHTML == 8){
		ins.innerHTML += 8;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 8;
	}
	else{
		ins.innerHTML += 8;
	}
}
function nine(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = 9;
	}
	else if(ins.innerHTML == 9){
		ins.innerHTML += 9;
	}
	else if(ins.innerHTML == 0){
		ins.innerHTML = 9;
	}
	else{
		ins.innerHTML += 9;
	}
}
function zero(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = "";
	}
	else{
		ins.innerHTML += 0;
	}
}
function del(){
	var ins = document.getElementById("current");
	ins.innerHTML = ins.innerHTML.substr(0,ins.innerHTML.length-1);
if(ins.innerHTML == ""){
	ins.innerHTML = 0;
}
}
function plus(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = "";
	}
	else{
		ins.innerHTML += "+";
	}
}
function minus(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinty"){
		ins.innerHTML = "";
	}
	else{
		ins.innerHTML += "-";
	}
}
function point(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = "";
	}
	else{
		ins.innerHTML += ".";
	}
}
function multiply(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = "";
	}
	else{
		ins.innerHTML += "*";
	}
}
function divide(){
	var ins = document.getElementById("current");
	if(ins.innerHTML == "infinity"){
		ins.innerHTML = "";
	}
	else{
		ins.innerHTML += "/";
	}
}
function equal(){
	var ins = document.getElementById("current").innerHTML;
	var print  = eval(ins).toLocaleString('en');
	document.getElementById("current").innerHTML = print;
}
function sqrt(){
	var ins = document.getElementById("current");
	if (ins.innerHTML == "infinity") {
		ins.innerHTML = Math.sqrt(ins.innerHTML);
	}
	else{
		ins.innerHTML = Math.sqrt(ins.innerHTML);
	}
}
function pow(){
	var ins = document.getElementById("current");
	if (ins.innerHTML == "infinity") {
		ins.innerHTML = "**";
	}
	else{
		ins.innerHTML += "**";
	}
}
/*
function show(){
 confirm("You are sending message to Oladayo Ahmod");
}
*/
function show(){
	var y = document.getElementById("inputing");
	var x = document.getElementById('result');

	if ( y !== "") {
		 alert("Dear " + x.value +"!"+" "+"You are born in "+"19"+(79-y.value + 40));
	}
	else{
		alert("Enter your year!");
	}
}
