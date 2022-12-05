
class Student{

    constructor(id, surname, name, patronymic, direction, duration) {
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.direction = direction;
        this.duration = duration;
    }

    getStudentAsElement() {
        let className = "student" + this.id;
        return `
                 <section class="${className}" style="
                     display: grid;
                     grid-template-columns: 7% 17% 16% 22% 19% 18%;
                     grid-column-gap: 0.2%;
                     font-size: 20px;
                     height: 5vh;">
                    <div id="field">${this.id}</div>
                    <div id="field">${this.surname}</div>
                    <div id="field">${this.name}</div>
                    <div id="field">${this.patronymic}</div>
                    <div id="field">${this.direction}</div>
                    <div id="field">${this.duration}</div>
                </section>
               `
    }

    includeStudentIntoPage() {
        const contentPage = document.getElementById("student-list__table-content");
        contentPage.insertAdjacentHTML("beforeend", this.getStudentAsElement());
    }

    changeBackground(i){
        console.log('hi')
        let select = '.student' + (i+1);
        console.log(select);
        let nodes = document.querySelector(select).childNodes;
        console.log(nodes);
        for (let j = 1; j<nodes.length; j+=2){
            nodes[j].style.background = 'indigo';
        }
        // this.name.style.background = 'indigo';
    }
    includeCharacteristicIntoPage() {

    }

}

let openRequest = indexedDB.open("StudentDB", 2);
const studentList = [];

openRequest.onerror = function (event) {
    console.log("Error on open DB ", event.target.errorCode);

};
openRequest.onsuccess = function(event) {
    let db = event.target.result;
    let store = db.transaction('students', 'readonly').objectStore('students');

    store.getAll().onsuccess = function (event) {
        let studentArr = event.target.result;
        for (let i=0; i<studentArr.length; i++) {
            let student = new Student(studentArr[i].id, studentArr[i].surname, studentArr[i].name, studentArr[i].patronymic, studentArr[i].direction, studentArr[i].duration);
            studentList.push(student);
            student.includeStudentIntoPage();
            if (i%2 == 0){
                student.changeBackground(i);
            }
        }
    }
};

