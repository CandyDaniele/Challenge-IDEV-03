const students = [];


function create(name, gender, dateOfBirth, classes, course) {

  const id = students.length;

  if(name == null || gender == null || dateOfBirth == null || classes == null || course == null) {
      console.log("All fields must be complete.");
  } else {
      name.toUpperCase()
      gender.toUpperCase();
      dateOfBirth.toUpperCase();
      classes.toUpperCase();
      course.toUpperCase();

      students.push({id, name,
        gender, dateOfBirth, classes, course});
    }
}




function findByPk(id) {

  const findId = students.find(idUser => idUser.id == id );

  
  
  if(findId) {
    console.log(`User found: ${id}`);
  }
  else {
    console.log('User not found with this id.')
  }
     
}


function findOne(name) {

  const findByName = students.find(nameUser => nameUser.name == name);

    
  if(findByName) {
    console.log(`User found: ${name}`);
  }
  else {
    console.log('User not found with this name.')
  }
}


function upDate(id, name, gender, dateOfBirth, classes, course) {

   name = name.toUpperCase()
   gender = gender.toUpperCase();
   dateOfBirth = dateOfBirth.toUpperCase();
   classes = classes.toUpperCase();
   course = course.toUpperCase();

   const student = students.find(studentId => studentId.id == id);
   const index = students.indexOf(student);

  students[index] = { id, name, gender, dateOfBirth, classes, course };
}


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

create( "Diogo", "m", "2000/10/23", "3b", "javascript" );
findOne("Diogo");
upDate(1, "Sophia", "f", "2012/08/21", "6a", "c");
findByPk(77);
console.log(students);