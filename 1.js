const project=1;
const about =2;
const contact=3;

var displaying=project;
var menuStatus = false;
var grid = document.querySelector(".grid-container");


function switchMenu(){
  console.log("switch");

  if(!menuStatus){
    showMenu();
    menuStatus = true;
  }

  else if (menuStatus) {
    closeMenu();
    menuStatus = false;
  }
}

function showMenu(){
  console.log("showing");
  let hamburger = document.querySelector("#nav-main button");
  let main = document.querySelector("#main");
  let aside = document.querySelector("#aside-right");
  grid.style.gridTemplateAreas='"header header nav-main" "main main aside-right" "footer footer footer"'
  aside.style.display = "block";

  hamburger.style.transform="rotate(360deg)"
}
function closeMenu(){
  console.log("showing");
  let hamburger = document.querySelector("#nav-main button");
  let main = document.querySelector("#main");
  let aside = document.querySelector("#aside-right");
  hamburger.style.transform="rotate(0deg)"
  grid.style.gridTemplateAreas='"header header nav-main" "main main main" "footer footer footer"'
  aside.style.display = "none";
}

function switchToProject(){
    let main = document.querySelector("#main-project");
    let mainAbout = document.querySelector("#main-about");
    let mainContact = document.querySelector("#main-contact");

    main.style.display="block";
    main.style.opacity= 1;


    mainAbout.style.display="none" ;
    mainAbout.style.opacity=0;

    mainContact.style.display="none";
    mainContact.style.opacity=0;
}

function switchToAbout(){
  let main = document.querySelector("#main-project");
  let mainAbout = document.querySelector("#main-about");
  let mainContact = document.querySelector("#main-contact");

  main.style.display="none";
  main.style.opacity= 0;

  mainAbout.style.display="block" ;
  mainAbout.style.opacity=1;

  mainContact.style.display="none";
  mainContact.style.opacity=0;

}

function switchToContact(){
  let main = document.querySelector("#main-project");
  let mainAbout = document.querySelector("#main-about");
  let mainContact = document.querySelector("#main-contact");

  main.style.display="none";
  main.style.opacity= 0;

  mainAbout.style.display="none" ;
  mainAbout.style.opacity=0;

  mainContact.style.display="block";
  mainContact.style.opacity=1;

}
