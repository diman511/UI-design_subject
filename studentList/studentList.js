
class Student{

    constructor(id, surname, name, patronymic, direction, duration) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.direction = direction;
        this.duration = duration;
    }

    includeStudentIntoPage() {

    }

    includeCharacteristicIntoPage() {

    }

}

let studentList = [];

const studentForm = document.getElementById('add-student__content')
studentForm.onsubmit = function(event) {
    event.preventDefault();
    let surname = studentForm.querySelector('[name="studentSurname"]').value;
    let name = studentForm.querySelector('[name="studentName"]').value;
    let patronymic = studentForm.querySelector('[name="studentPatronymic"]').value;
    let direction = studentForm.querySelector('[name="direction"]').value;
    let duration = studentForm.querySelector('[name="duration"]').value;
    let arrLength = studentList.length;
    let student = new Student(arrLength, surname, name, patronymic, direction, duration);
    studentList.push(student);
    console.log(student)
}
