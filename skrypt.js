function checkValue(){
	var usernameFld = document.forms["login-form"]["username"];
	var passwordFld = document.forms["login-form"]["password"];

	var userval = usernameFld.value;
	if(userval.length < 10){
		console.log(userval);
		alert("za krótkie imie");
		usernameFld.style.color = "red";
		return false;
	}
}

function onEdit(){
	var usernameFld = document.forms["login-form"]["username"];
	var passwordFld = document.forms["login-form"]["password"];

	var userval = usernameFld.value;
	if(userval.length < 10 && !userval.length == 0){
		usernameFld.style.color = "red";
		return false;
	}
	else{
		usernameFld.style.color = "black";
	}

	var passwordval = passwordFld.value;
	if(passwordval.length < 10 && !passwordval.length == 0){
		passwordFld.style.color = "red";
		return false;
	}
	else{
		passwordFld.style.color = "black";
	}

}

function change(){
	var photoBox = document.getElementById("photo");
	console.log("LOL");
	alert(photoBox.backgroundImage);

}

function changeBackground(){
	var body = document.body;
	body.style.backgroundColor = "red";
}

function onLoad(){

}