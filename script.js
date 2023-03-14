let submit=document.querySelector("button");
let output=document.querySelector(".output");

submit.addEventListener("click",()=>{
    let date1=new Date(document.querySelector(".startdate").value);
    let date2=new Date(document.querySelector(".enddate").value);
    if(date1.getTime()&&date2.getTime()){
        let timediff=date2.getTime()-date1.getTime()
        let daydiff=Math.abs(timediff/(1000*3600*24));
        output.innerHTML=`The number of days between the two given dates is <span>${daydiff}</span> days`
        
    }
    else{
        output.innerHTML=`Please enter a valid date`
    }

})