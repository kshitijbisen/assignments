const fs = require('fs')
let data = "Hello Kshitij the great"
fs.writeFile("a.txt", data, (err) => { 
    if (err) 
      console.log(err); 
    else { 
      console.log("File written successfully\n"); 
      console.log("The written has the following contents:"); 
      fs.readFile("a.txt","utf-8",(err,data)=>{
        console.log(data)
    });
    } 
  }); 