console.log("Inside weather app");

let city=document.getElementById("inputCity");


let userAction=async()=>{
     
     let response=await fetch(`https://api.weatherapi.com/v1/current.json?key=3830c7011519423ab9653234232205&q=${city.value}`);
     let result= await response.json();
     console.log(result.current);
     console.log(result.current.condition);
     console.log(result);
     document.getElementById("temp_c").innerHTML=result.current.feelslike_c+"°C";
     document.getElementById("temp_f").innerHTML=result.current.feelslike_f+"°F";
     document.getElementById("imageOutlook").src=result.current.condition.icon;
     
     
     

    
}