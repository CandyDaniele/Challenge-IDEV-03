const users = [];


function create(email, password, admin) {

  const e = typeof(email);
  const p = typeof(password);
  const a = typeof(admin);

  const id = users.length;

  email = email.toUpperCase();
  password = password.toUpperCase();

  if (email, password, admin != null) {
      if (e == p) {
          users.push({
              id,
              email,
              password,
              admin: admin
          })
          console.log('User successfully created!');

      } else {
          console.log('Email or password is incorrect.');
      }

  } else {
    console.log("All fields must be complete.");
  }
}


function findByPk(id, email) {

  const findId = users.find(idUser => idUser.id == id );

  const findEmail = users.find(emailUser => emailUser.email == email );
  
  if(findId && findEmail) {
    console.log(`User found with id: ${id} \n and the email: ${email}`);
  }
  else {
    console.log('User not found with this id or e-mail')
  }
     
}

function login(email, password){
  const userEmail = users.find(idUserEmail => idUserEmail.email == email);
  const index = users.indexOf(userEmail);
  if (userEmail){
      const findUserPassword = users[index].password == password;
      if (findUserPassword){
          console.log(`User ${email} connected`);
      }else{
          console.log("Invalid password");
      }
  }
  else 
      console.log("User not found");
}

function index() {
  console.table(users);
}

function destroy(id) {
  for(let user of users) {
    if(user.id === id){
      users.splice(users.indexOf(user), 1);
    }  
  }
}


 findByPk(1, "daniele_oli_lucas@hotmail.com");


destroy(2);

index();

login('daniele_oli_lucas@hotmail.com', '123456' );


create("daniele_oli_lucas@hotmail.com", "123456", false);




console.log(users);
