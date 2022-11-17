
const signUpForm = document.getElementById('signUp-form');
console.log(signUpForm);
signUpForm.onsubmit = function() {
    let newLogin = signUpForm.querySelector('[name="newLogin"]');
    let newPassword = signUpForm.querySelector('[name="newPassword"]');
    let confirmedPassword = signUpForm.querySelector('[name="confirmedPassword"]');
    console.log(newLogin)
    console.log(newPassword)
    console.log(confirmedPassword)
    window.location.href='../studentList/studentList.html'
};


