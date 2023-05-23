console.log("Inside weather app");

let city=document.getElementById("inputCity");

let weatherCache={};
let result;
let userAction=async()=>{
     //  counter+=1; 
     //  console.log("fecthing data"+ counter);
    
// Implementing cache for improving browser performance
     if (weatherCache[city.value]){
         result=weatherCache[city.value];
     }
     else{
          let response=await fetch(`https://api.weatherapi.com/v1/current.json?key=3830c7011519423ab9653234232205&q=${city.value}`);
          result= await response.json();
          weatherCache[city.value]=result;   
          console.log("calling the api for the result");
     }

     
     // console.log(result.current);
     // console.log(result.current.condition);
     // console.log(result);
     document.getElementById("temp_c").innerHTML=result.current.feelslike_c+"°C";
     document.getElementById("temp_f").innerHTML=result.current.feelslike_f+"°F";
     document.getElementById("imageOutlook").src=result.current.condition.icon;
}

///Debouncing functionality applied so that minimum api call will get hit
// const debounce=(userAction,d)=>{
//      let timer;
//      return (...args)=>{
          
//           clearTimeout(timer);
         
//           timer=setTimeout(()=>{
          
//           userAction.apply(this,args);
//           },d)
//      }
// }

//Implementing debouncing function for delay the api request
// const betterFunction=debouce(userAction,250);
