
const characteristicForm = document.getElementById('add-characteristic__content')
characteristicForm.onsubmit = function(event) {
    event.preventDefault();
    let db;
    let studentDB = window.indexedDB.open("StudentDB", 1);
    let subject = characteristicForm.querySelector('[name="subjectSpace"]').value;
    let mark = characteristicForm.querySelector('[name="markSpace"]').value;
    let description = characteristicForm.querySelector('[name="descriptionSpace"]').value;

    studentDB.onupgradeneeded = function(event) {
        console.log('Open db --- onupgradeneeded');
        db = event.target.result;

        if(!db.objectStoreNames.contains("characteristic")) {
            db.createObjectStore("characteristic", {keyPath: "id", autoIncrement: true});
        }
    };
    studentDB.onerror = function(event) {
        window.location.href='../studentList/studentList.html';
        alert("DataBase error on code: " + event.target.errorCode);
    };
    studentDB.onsuccess = function(event) {
        console.log('Open db --- onsuccess');
        db = event.target.result;
        if(!db.objectStoreNames.contains("students")) {
            db.createObjectStore("students", {keyPath: "id", autoIncrement: true});
        }
        let store = db.transaction('students', 'readonly').objectStore('students');
        let numberOfStudent = store.getAll();
        let studentCharacteristic = {
            student: numberOfStudent.length,
            subject: subject,
            mark: mark,
            description: description
        };
        let transaction = db.transaction('characteristic', 'readwrite');
        let adding = transaction.objectStore('characteristic');

        let request = adding.add(studentCharacteristic);
        request.onsuccess = function() {
            console.log('Запись успешна');
        }
        request.onerror = function(event) {
            console.log('Какаято ашибка', event.target.error);
        }
    };

}