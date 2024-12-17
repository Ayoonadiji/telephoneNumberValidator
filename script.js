const checkBtn =document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");


const validateFunc = ()=>{

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s.-]?)\d{3}([\s.-]?)\d{4}$/;
  if(userInput.value === ""){
    alert("Please provide a phone number");
    return;
  }else if(phoneRegex.test(userInput.value)){
  results.textContent = `Valid US number: ${userInput.value}`;
}else{
    results.textContent = `Invalid US number: ${userInput.value}`;
}
}

const clearFunc = ()=>{
  userInput.value = "";
  results.innerHTML = "";
}


checkBtn.addEventListener("click", validateFunc);
clearBtn.addEventListener("click", clearFunc);