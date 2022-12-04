
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
        contentPage.insertAdjacentHTML("beforeend", this.getStudentAsElement());
    }

    includeCharacteristicIntoPage() {

    }

}

let studentList = [];
// for (let i=0; i<numStudent; i++) {
//     let student = new Student(arrLength, surname, name, patronymic, direction, duration);
//     studentList.push(student);
//     student.includeStudentIntoPage();
// }

