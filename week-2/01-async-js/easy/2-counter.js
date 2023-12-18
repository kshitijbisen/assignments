let counter=0;
function interval(){
    
   setTimeout(()=>{
    interval();
    },1000);
    console.log(counter);
    counter+=1;
}

interval();