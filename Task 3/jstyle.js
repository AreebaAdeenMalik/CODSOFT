 // This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
// change background color for specific id ..
function changebackground(){
document.getElementById('01').style.backgroundColor='ForestGreen'; 
document.getElementById('02').style.backgroundColor='ForestGreen'; 
document.getElementById('03').style.backgroundColor='ForestGreen';
document.getElementById('calculator').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator1').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator2').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator3').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator4').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator5').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator6').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator7').style.backgroundColor='ForestGreen';
document.getElementById('calculator8').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator9').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator10').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator11').style.backgroundColor='ForestGreen';
document.getElementById('calculator12').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator13').style.backgroundColor='ForestGreen';
document.getElementById('calculator14').style.backgroundColor='ForestGreen'; 
document.getElementById('calculator15').style.backgroundColor='ForestGreen';
document.getElementById('calculator16').style.backgroundColor='ForestGreen';
document.getElementById('calculator17').style.backgroundColor='ForestGreen'; 
}
function changebackground1(){
document.getElementById('01').style.backgroundColor='Blue'; 
document.getElementById('02').style.backgroundColor='Blue'; 
document.getElementById('03').style.backgroundColor='Blue';
document.getElementById('calculator').style.backgroundColor='Blue'; 
document.getElementById('calculator1').style.backgroundColor='Blue'; 
document.getElementById('calculator2').style.backgroundColor='Blue'; 
document.getElementById('calculator3').style.backgroundColor='Blue'; 
document.getElementById('calculator4').style.backgroundColor='Blue'; 
document.getElementById('calculator5').style.backgroundColor='Blue'; 
document.getElementById('calculator6').style.backgroundColor='Blue'; 
document.getElementById('calculator7').style.backgroundColor='Blue';
document.getElementById('calculator8').style.backgroundColor='Blue'; 
document.getElementById('calculator9').style.backgroundColor='Blue'; 
document.getElementById('calculator10').style.backgroundColor='Blue'; 
document.getElementById('calculator11').style.backgroundColor='Blue';
document.getElementById('calculator12').style.backgroundColor='Blue'; 
document.getElementById('calculator13').style.backgroundColor='Blue';
document.getElementById('calculator14').style.backgroundColor='Blue'; 
document.getElementById('calculator15').style.backgroundColor='Blue';
document.getElementById('calculator16').style.backgroundColor='Blue';
document.getElementById('calculator18').style.backgroundColor='Blue';
}