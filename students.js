const students = [{
    id: 36,
    name: 'Diogo',
    gender: 'M',
    dateOfBirth: '2000/10/23',
    classes: '3B',
    course: 'ALGORITMO'
  },
  {
    id: 77,
    name: 'Luiza',
    gender: 'F',
    dateOfBirth: '1990/04/01',
    classes: '6A',
    course: 'Java'
}];

/*

function create(name, gender, dateOfBirth, classes, course) {

  if(name == null || gender == null || dateOfBirth == null || classes == null || course == null) {
      console.log("All fields must be complete.");
  } else {
      id = Math.floor(1000 * Math.random() + 1);
      name.toUpperCase()
      gender.toUpperCase();
      dateOfBirth.toUpperCase();
      classes.toUpperCase();
      course.toUpperCase();

      students.push({id, name,
        gender, dateOfBirth, classes, course});
    }
}
*/

function findByPk(id, name) {

  const findId = students.find(idUser => idUser.id == id );

  const findByName = students.find(nameUser => nameUser.name == name);
  
  if(findId && findByName) {
    console.log(`Usuário encontrado com o id: ${id} \n ${name}`);
  }
  else {
    console.log('Usuário não encontrado com este id ou nome.')
  }
     
}








/*
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
*/

//create( "Diogo", "M", "2000/10/23", "3B", "ALGORITMO" );
//create( "Luiza", "F", "1990/04/01", "6A", "Java" );

//findByPk(77);
findByPk(30, "Diogo");
//console.log(students);