// const userInput=document.querySelector(".user-input");
// const keys=document.querySelectorAll(".key");
// const resetKey=document.querySelector(".reset-key");
// const delKey=document.querySelector(".DEL-KEY");
// const answerKey=document.querySelector(".answer-key");

// let lastKeyIsOperator=false;
// let isDecimal=false;

// delKey.addEventListener("click",() =>{
//     let initialValue=userInput.value;
//     let updatedValue=initialValue.substring(0,initialValue.length-1)
//     userInput.value=updatedValue;
// });

// answerKey.addEventListener("click", ()=> {
//     const expression=userInput.value;
//     const result=eval(expression);
//     userInput.value=result;    
// })

// resetKey.addEventListener("click",()=>{
//     console.log("reset is clicked");
//     userInput.value="";
// })

// const arrayKey= Array.from(keys);
// arrayKey.forEach((key) => {
//     key.addEventListener("click",(event)=>{
//         console.log(event.target.innerText);
//         const value=event.target.innerText;
//         if(value ==="." && isDecimal){
//             return;
//         }
//         if('+-/*'.includes(value)){
//             if(lastKeyIsOperator){
//                 let initialValue=userInput.value;
//                 let updatedValue=initialValue.substring(0,initialValue.length-1)+value;
//                 userInput.value=updatedValue;
//                 return;
//             }
//             lastKeyIsOperator=true;
//             isDecimal=false;
//         }else{
//             lastKeyIsOperator=false;
//             if(value==='.'){
//                 isDecimal=true;
//             }
//         }
//         userInput.value+=value;
//     });
// });
const userInput = document.querySelector(".user-input");
const keys = document.querySelectorAll(".key");
const resetKey = document.querySelector(".reset-key");
const delKey = document.querySelector(".DEL-KEY");
const answerKey = document.querySelector(".answer-key");

let lastKeyIsOperator = false;
let isDecimal = false;

delKey.addEventListener("click", () => {
    userInput.value = userInput.value.slice(0, -1);
});

answerKey.addEventListener("click", () => {
    const expression = userInput.value;
    try {
        const result = eval(expression);
        userInput.value = result;
    } catch (e) {
        userInput.value = "Error";
    }
});

resetKey.addEventListener("click", () => {
    userInput.value = "";
    lastKeyIsOperator = false;
    isDecimal = false;
});

keys.forEach((key) => {
    key.addEventListener("click", (event) => {
        const value = event.target.innerText;
        if (value === "." && isDecimal) {
            return;
        }

        if ('+-/*'.includes(value)) {
            if (lastKeyIsOperator) {
                userInput.value = userInput.value.slice(0, -1) + value;
                return;
            }
            if (userInput.value === "" || userInput.value === "Error") {
                return;
            }
            lastKeyIsOperator = true;
            isDecimal = false;
        } else {
            lastKeyIsOperator = false;
            if (value === '.') {
                isDecimal = true;
            }
        }

        if (userInput.value === "Error") {
            userInput.value = "";
        }

        userInput.value += value;
    });
});
