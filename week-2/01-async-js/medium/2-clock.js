
const currentDate = new Date();
let hr=currentDate.getHours();
let min=currentDate.getMinutes();
let sec=currentDate.getSeconds();

// 24 hrs
setInterval(()=>{sec+=1;if(sec==60){
    sec=0;
    min+=1;
}
if(min==60){
    hr+=1;
    min=0;
}
console.log(hr+":"+min+":"+sec)
if(hr==24){
    hr=0;
}
},1000);

//12 hrs
let ampm="PM";
setInterval(()=>{sec+=1;if(sec==60){
    sec=0;
    min+=1;
}
if(min==60){
    hr+=1;
    min=0;
}
if(hr>12){
    hr%=12;
}
console.log(hr+":"+min+":"+sec+" "+ampm)
if(hr==12){
    if(ampm=="PM"){
        ampm="AM";
    }
    else{
        ampm=="PM";
    }
    }
},1000);