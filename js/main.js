var room_type = new Array();
room_type[250] ="250";
room_type[150] ="150";
var suite=250;
var deluxe=100;
function getName()
{
    
    var theForm = document.forms["form-group"];
   
       
        var suite=document.getElementById("Name").value;
   
    if(Name.value!="")
    {
        custname = parseInt(Name.value);
    }
return custname;
}
function getdays()
{
    
    // var theForm = document.forms["form-group"];
    //Get a reference to the TextBox
    var stay = document.getElementById("noofdays");
    
    
    if(noofdays.value!="")
    {
        stay = parseInt(noofdays.value);
    }
    else{
        alert("enter number of days of stay" );
    }
return stay;
}
// function roomtypecost()
// {
//     var roomtypecost=0;
    
//     var theForm = document.forms["submit"];
    
//     var roomtype = getElementByName("roomtype").checked;
   
//     for(var i = 0; i < roomtype.length; i++)
//     {
       
//         if(room_type[i].checked)
//         {
            
//             roomtypecost = room_type[room_type[i].value];
        
//             break;
//         }
//     }
//     return roomtypecost;
// }
function roomtypecost(){
    var roomtypeco=0;
    var roomtype=document.getElementsByName("roomtype")[0].checked;
    //console.log("abc ",roomtype);
if(roomtype==true){
     roomtypeco=250;
console.log("fadgasdf ",roomtypeco);
}
else {
   roomtypeco=150;
}
return roomtypeco;

}

function calculatetotal(){
    roomtypeco =parseInt(roomtypecost());
   
    totalcost= roomtypecost()*getdays();
     
    var finalcost=document.getElementById("finalcost");
    finalcost.innerHTML=totalcost;
    //return totalcost;
    console.log("iugrdr ",totalcost);
}



