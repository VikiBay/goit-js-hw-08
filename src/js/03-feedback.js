const form = document.querySelector('.feedback-form')
const {email, message} = form.elements;
form.addEventListener("input", onFormInput)
email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email
message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message

function onFormInput(){
    console.dir(message)
    const formInputObj ={email:email.value, message:message.value}
    localStorage.setItem("feedback-form-state", JSON.stringify(formInputObj))
    // localStorage.setItem("feedback-form-state", formInputObj)
console.log(formInputObj)
}
