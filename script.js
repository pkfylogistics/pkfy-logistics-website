function track(){

let number=document.getElementById("tracking").value;


if(number=="")
{
document.getElementById("result").innerHTML="Please enter tracking number";
}

else
{
document.getElementById("result").innerHTML=
"Your shipment number "+number+" is being processed.";
}

}
