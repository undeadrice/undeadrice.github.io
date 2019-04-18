var pop1 = false;
var pop2 = false;
var pop3 = false;
var pop4 = false;
var pop5 = false;



window.setTimeout(showWinrar,1000);


let link = document.querySelector(".horizontal-list li a[href='#']");

link.addEventListener("mouseover",onHover)
link.addEventListener("mouseout",onOut)



function onLoad(e){

}

function onHover(e){
	let link = document.querySelector(".horizontal-list li a[href='#']");
	link.innerHTML="NOT FOR YOU"
	e.stopPropagation();

}

function onOut(e){
	let link = document.querySelector(".horizontal-list li a[href='#']");
	link.innerHTML="Free cookies"
	e.stopPropagation();

}

function closeWinrar(e){
	let popup = document.querySelector(".annoying-popup-north");
	popup.style.display="none";
	pop1 = true
	window.setTimeout(showNewsLetter,800);
}

function showWinrar(e){
	
	let popup = document.querySelector(".annoying-popup-north");
	popup.style.bottom=0;
	popup.style.display="block";
	

}

function showNewsLetter(e){
	let popup = document.querySelector(".annoying-popup-west");
	popup.style.right=0;
	popup.style.display="block";

}

function closeNewsLetter(e){
	let popup = document.querySelector(".annoying-popup-west");
	popup.style.display="none";
	pop2=true;
	window.setTimeout(showCookies,300);
}

function showCookies(e){
	let popup = document.querySelector(".annoying-popup-east");
	popup.style.left=0;
}

function closeCookies(e){
	let popup = document.querySelector(".annoying-popup-east");
	popup.style.display="none";
	pop3=true;
}