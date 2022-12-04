
const studentForm = document.getElementById('add-student__content')
studentForm.onsubmit = function(event) {
    event.preventDefault();
    let studentDB = window.indexedDB.open("StudentDB", 1);
    let surname = studentForm.querySelector('[name="studentSurname"]').value;
    let name = studentForm.querySelector('[name="studentName"]').value;
    let patronymic = studentForm.querySelector('[name="studentPatronymic"]').value;
    let direction = studentForm.querySelector('[name="direction"]').value;
    let duration = studentForm.querySelector('[name="duration"]').value;
    studentDB.onerror = function(event) {
        alert("DataBase error on code: " + event.target.errorCode);
    };
    studentDB.onsuccess = function(event) {
        let dataBase = event.target.result;
    };
    window.location.href='../studentList/studentList.html';
}