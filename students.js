const students = [{
  id: 1,
  name: 'DIOGO',
  gender: 'M',
  dateOfBirth: new Date(2000,10,23),
  class: '3A',
  course: 'ALGORITMO'
},
{
  id: 2,
  name: 'AMANDA',
  gender: 'F',
  dateOfBirth: new Date(1989,12,20),
  class: '3B',
  course: 'SCRUM'
},
{
  id: 3,
  name: 'VERA',
  gender: 'F',
  dateOfBirth: new Date(1982,1,5),
  class: '4A',
  course: 'JAVA'
}];


function index() {
  console.table(students);
}

function destroy(id) {
  for(let student of students) {
    if(student.id === id){
      students.splice(students.indexOf(student), 1);
    }  
  }
}

destroy(2);

index();