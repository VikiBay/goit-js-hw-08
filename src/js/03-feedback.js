    import {save, load,} from "./localStorage.js"

    var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form')
const {email, message} = form.elements;

const formInputObj = load("feedback-form-state") || {}

email.value = formInputObj.email || "";
message.value = formInputObj.message || "";


form.addEventListener("input", throttle(onFormInput, 1000))
form.addEventListener("submit", onFormSubmit)

function onFormInput(evt){
    // formInputObj[evt.target.name] = evt.target.value
    formInputObj.email =email.value;
    formInputObj.message = message.value;
    save("feedback-form-state", formInputObj)
    // localStorage.setItem("feedback-form-state", JSON.stringify(formInputObj))
    
// console.log(formInputObj)
}

function onFormSubmit(evt){
    if(!email.value || !message.value){
   
        alert("Enter anything!!")
       
        return
    }
evt.preventDefault();
console.log(formInputObj)
localStorage.clear()
evt.currentTarget.reset()


}
