
var today = new Date();

var dd = String(today.getDate());
var yyyy = today.getFullYear();

const getMonth =()=>{
let month ="";
var mm = String(today.getMonth() + 1); 
//console.log(mm)
switch (mm) {
  case "1":
    return month ="January";
    
  case "2":
    return month ="February";
    
  case "3":
    return month ="March";
    
  case "4":
    return month ="April";
    
  case "5":
    return month ="May";
    
  case "6" :
    return month ="June";
    
  case "7":
    return month ="July";
    
  case "8":
    return month ="August";
    
  case "9":
    return month ="September";
    
  case "10":
    return month ="October";
    
  case "11":
    return month ="November";
    
  case "12":
    return month ="December";
    
  default:
    return month ="";
}}


let month = getMonth();

document.querySelector('#date').innerHTML = `${month} ${dd}, ${yyyy}`;

