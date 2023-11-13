const numberBtn=document.querySelectorAll("[data-number]");
const operationBtn=document.querySelectorAll("[data-operation]");
const allclearBtn=document.querySelector("[data-all-clear]");
const dataEquals=document.querySelector("[data-equals]");
const deleteBtn=document.querySelector("[data-delete]");
const currOperand=document.querySelector("[data-current-operand]");
const prevOperand=document.querySelector("[data-previous-operand]");
const dataOutputOperand=document.querySelector("[data-output-operand]");
let result, op1,op2;
let operator;
console.log(result);
console.log(numberBtn);

numberBtn.forEach(num=>num.addEventListener("click",(e)=>{
 
 if (e.target.innerText==="." && currOperand.innerHTML.includes(".") ) return
  // currOperand.innerHTML+=e.target.innerText;
  
 if (result!==undefined){
    currOperand.innerHTML+=e.target.innerText;
  }else{
    currOperand.innerHTML=e.target.innerText;
  }  

}))

operationBtn.forEach(op=>op.addEventListener("click",(e)=>{

        if (prevOperand!==""){
          operator=e.target.innerText;
          currOperand.innerHTML+=e.target.innerText;
        }
        if(result===undefined){
          prevOperand.innerHTML=currOperand.innerHTML;
          currOperand.innerHTML="";
        }else{
          currOperand.innerHTML="";
          prevOperand.innerHTML= result+operator;
        }     
          
        
}))

allclearBtn.addEventListener("click",()=>{
  prevOperand.innerHTML="";
  currOperand.innerHTML="";
  dataOutputOperand.innerHTML="";
  result=undefined;
  })
deleteBtn.addEventListener("click",()=>{
     currOperand.innerHTML=currOperand.innerText.slice(0,-1);
})

dataEquals.addEventListener("click",(e)=>{
// console.log(prevOperand.innerText.slice(0,-1));
   op1=Number(prevOperand.innerText.slice(0,-1));
   op2=Number(currOperand.innerText);  

switch(operator){
        case "+":
          result= op1+op2;    
          break
        case "-":
          result= op1-op2;
          break
        case "*":
          result=op1*op2;     
          break
        case "/":
          result= op1/op2;
          break
        
        default:
           return  
        }   
      // currOperand.innerHTML=result;
      dataOutputOperand.innerHTML=result;
})