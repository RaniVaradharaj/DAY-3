var arr = [
    { "name" : "Queen" , "age" : "22"  } ,
    { "name" : "Rani" , "age" : "23"  } ,
   { "name" : "Barbie" , "age" : "24"  } 
 ];
 
 // for Loop :
 console.log("for loop:")
 for(let i=0;i<arr.length;i++){
     console.log(arr[i]["name"], arr[i]["age"]);
 }

 var object = {
     "Name" : "Queen" ,
     "Age" : "22" ,
     "year" : "2022"
 }
 
 // for in :
console.log("for in objects:")    // in objects
 for(let i in object){           
    console.log(i, object[i]);  
 }

 console.log("\n", "for in array of objects");     // in array of objects

 for(let i in arr){             
    console.log(arr[i]["name"], arr[i]["age"]);
 }

 console.log("\n");
console.log("for of:");
 // for of :
 for(i of arr){
    console.log(i["name"], i["age"]);
 }

 console.log("\n");
console.log("for each:");
 // for each :
 arr.forEach((e)=> {
     console.log(e["name"], e["age"]);    
 })