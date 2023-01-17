
const characteristicForm = document.getElementById('add-characteristic__content')
characteristicForm.onsubmit = function(event) {
    event.preventDefault();
    let db;
    let studentDB = window.indexedDB.open("studentDB", 1);
    let subject = characteristicForm.querySelector('[name="subjectSpace"]').value;
    let mark = characteristicForm.querySelector('[name="markSpace"]').value;
    let description = characteristicForm.querySelector('[name="descriptionSpace"]').value;
    
}