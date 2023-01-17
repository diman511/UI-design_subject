
const studentForm = document.getElementById('add-student__content')
studentForm.onsubmit = function(event) {
    event.preventDefault();
    let db;
    let studentDB = window.indexedDB.open("StudentDB", 1);
    let surname = studentForm.querySelector('[name="studentSurname"]').value;
    let name = studentForm.querySelector('[name="studentName"]').value;
    let patronymic = studentForm.querySelector('[name="studentPatronymic"]').value;
    let direction = studentForm.querySelector('[name="direction"]').value;
    let duration = studentForm.querySelector('[name="duration"]').value;
    let student = {
        surname: surname,
        name: name,
        patronymic: patronymic,
        direction: direction,
        duration: duration
    };
    studentDB.onupgradeneeded = function(event) {
        console.log('Open db --- onupgradeneeded');
        db = event.target.result;

        if(!db.objectStoreNames.contains("students")) {
            db.createObjectStore("students", {keyPath: "id", autoIncrement: true});
        }
    };
    studentDB.onerror = function(event) {
        window.location.href='../studentList/studentList.html';
        alert("DataBase error on code: " + event.target.errorCode);
    };
    studentDB.onsuccess = function(event) {
        console.log('Open db --- onsuccess');
        db = event.target.result;
        console.log(db.objectStoreNames.contains("students"));
        if(!db.objectStoreNames.contains("students")) {
            db.createObjectStore("students", {keyPath: "id", autoIncrement: true});
        }
        let transaction = db.transaction('students', 'readwrite');
        let adding = transaction.objectStore('students');

        let request = adding.add(student);
        console.log(request);

        request.onsuccess = function() {
            console.log('Запись успешна');
        }
        request.onerror = function(event) {
            console.log('Какаято ашибка', event.target.error);
        }
    };
    window.location.href='../studentList/studentList.html';
}