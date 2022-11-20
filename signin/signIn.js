
const signInForm = document.getElementById('signIn-form');
signInForm.onsubmit = function(event) {
    event.preventDefault();
    let userLogin = signInForm.querySelector('[name="userLogin"]').value;
    let userPassword = signInForm.querySelector('[name="userPassword"]').value;
    let rightPassword = localStorage.getItem(userLogin);
    if (rightPassword == null){
        let alertElem = document.querySelector(".alert-user");
        alertElem.style.display = 'block';
    }
    else{
        if (rightPassword == userPassword){
            window.location.href='../studentList/studentList.html'
        }
        else{
            let alertElem = document.querySelector(".alert-user");
            alertElem.style.display = 'block';
        }
    }
}