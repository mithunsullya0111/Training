    // Author Mithun S

    // Get todays date and time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();


// /on loading this function will be called which sets the hour minute and second hand in proper position 
function clock()
{
    if(hour>12)
    {
        hour=hour-12;
    }
    hour=180+hour*30+minute*0.5;
    minute=180+minute*6;
    second=second*6;
    
    var ref=document.getElementsByClassName("minute_hand")[0];
    ref.style.transform="rotate("+minute+"deg)";

    var ref=document.getElementsByClassName("hour_hand")[0];
    ref.style.transform="rotate("+hour+"deg)";

    var ref=document.getElementsByClassName("seconds_hand")[0];
    ref.style.transform="rotate("+second+"deg)";

    setInterval(second_hand,1000);
    setInterval(hour_hand,600000);

   
}

//seconds hand of the clock will be ticked for every one second

function second_hand(){
    second+=6;
    var ref=document.getElementsByClassName("seconds_hand")[0];
    ref.style.transform="rotate("+second+"deg)";
    ref.style.transformOrigin="top left";
   if(second%360==180)
   {
       minute_hand();
   }

}

//minute hand of the clock will be ticked 

function minute_hand(){
    minute+=6;
    var ref=document.getElementsByClassName("minute_hand")[0];
    ref.style.transform="rotate("+minute+"deg)";
    ref.style.transformOrigin="top left";
   

}

//hour hand of the clock will be ticked


function hour_hand(){
    hour+=6;
    var ref=document.getElementsByClassName("hour_hand")[0];
    ref.style.transform="rotate("+hour+"deg)";
    ref.style.transitionOrigin="top left";
    

}


    
