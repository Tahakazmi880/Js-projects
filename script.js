const form = document.getElementById('form');
const username = document.getElementById('username');

const Email = document.getElementById('Email');

const password1 = document.getElementById('password1');

const password2 = document.getElementById('password2');

 
function ErrorMsg(input,message){
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
const small = formControl.querySelector('small');
small.innerText = message;
}
function ShowSuccess(input){
    const formControl = input.parentElement;

formControl.className = "form-control success";
}

 form.addEventListener('submit',function(e){
e.preventDefault();

if(username.value == ''){
// console.log("username empty");
ErrorMsg(username,"Kindly fill the field");
}else{
    ShowSuccess(username);
}
 })