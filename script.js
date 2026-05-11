document.getElementById("traderForm").addEventListener("submit", function(e){

e.preventDefault();

let score = 0;

let stoploss = document.getElementById("stoploss").value;

if(stoploss === "Yes"){
score += 10;
}

document.getElementById("result").innerHTML =
"Trader Score: " + score;

});
