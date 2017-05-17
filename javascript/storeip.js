var ip ="";
function showipdialog(){
	$("#ipmodal").modal('show');
}
function setip(){
	var currentip = document.getElementById("iptext").value;
	ip=currentip;
	$("#ipmodal").modal('toggle');
	refresh();
}