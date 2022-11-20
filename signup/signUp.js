
const signUpForm = document.getElementById('signUp-form');
signUpForm.onsubmit = function(event) {
    event.preventDefault();
    let newLogin = signUpForm.querySelector('[name="newLogin"]').value;
    let newPassword = signUpForm.querySelector('[name="newPassword"]').value;
    let confirmedPassword = signUpForm.querySelector('[name="confirmedPassword"]').value;
    if (newPassword == confirmedPassword){
        let userKey = 'user0';
        for (let i = 0; i<localStorage.length; i++){
            let key = localStorage.key(i);
            if (key.startsWith('user')){
                userKey = 'user' + (i+1);
            }
        }
        localStorage.setItem(userKey, newLogin);
        localStorage.setItem(newLogin, newPassword);
        window.location.href='../studentList/studentList.html'
    }
    else{
        let alertElem = document.querySelector(".alert-password");
        alertElem.style.display = 'block';
    }
}


