let selection = 0;
let total = 0;

const prices = [5,15,4.50];


function removeAll(){
  console.log("removing");
  var ol = document.getElementById("cart-list");
  ol.innerHTML = "";
  console.log(ol);
  total = 0;
  updateTotalCost();
}


function onBuyBtnClicked(){

}

function getSelectedFlowerName(){
  switch(selection){
    case 0: return ["Róża",prices[selection]];
    case 1: return ["Fiołek",prices[selection]];
    case 2: return ["Ziółko",prices[selection]];
}
}

function addSelectedFlower(){

    var ol = document.getElementById("cart-list");

    var li = document.createElement("LI");
    var data = getSelectedFlowerName();

    var text = document.createTextNode(data[0]);
    total += data[1];
    li.appendChild(text);

    ol.appendChild(li);
    updateTotalCost();


}

function updateTotalCost(){
  var cost = document.getElementById("money");
  cost.innerHTML = total;
}



function select(num){
  selection = num;
  console.log(selection);

}
