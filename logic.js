
class Student{

    constructor(id, surname, name, patronymic, direction, duration) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.direction = direction;
        this.duration = duration;
        // this.includeStudentIntoPage()
    }

    getStudentAsElement() {
        let className = "student" + this.id;
        return `
                 <section class="${className}" style="
                     display: grid; 
                     grid-template-columns: 7% 17% 16% 22% 19% 18%; 
                     grid-column-gap: 0.2%;">
                    <div>${this.id}</div>
                    <div>${this.surname}</div>
                    <div>${this.name}</div>
                    <div>${this.patronymic}</div>
                    <div>${this.direction}</div>
                    <div>${this.duration}</div>
                </section>
               `
    }

    includeStudentIntoPage() {
        const contentPage = document.getElementById("student-list__table-content");
        console.log(contentPage);
        contentPage.insertAdjacentHTML("beforeend", this.getStudentAsElement());
    }

    includeCharacteristicIntoPage() {

    }

}

let studentList = [];

studentForm.onsubmit = function(event) {
    event.preventDefault();
    let surname = studentForm.querySelector('[name="studentSurname"]').value;
    let name = studentForm.querySelector('[name="studentName"]').value;
    let patronymic = studentForm.querySelector('[name="studentPatronymic"]').value;
    let direction = studentForm.querySelector('[name="direction"]').value;
    let duration = studentForm.querySelector('[name="duration"]').value;
    let arrLength = studentList.length;
    window.location.href='../studentList/studentList.html';
    let student = new Student(arrLength, surname, name, patronymic, direction, duration);
    studentList.push(student);
    console.log(studentList[0]);
    student.includeStudentIntoPage();
}