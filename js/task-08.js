
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
  const {
    elements: { email, password } 
  } = event.currentTarget;


 if (email.value === "" || password.value === "") {
    alert('Please fill in all the fields!') 
}

 const userForm = { email: email.value, Password: password.value }
    console.log(userForm)
    event.currentTarget.reset()
}   
    
    
    

