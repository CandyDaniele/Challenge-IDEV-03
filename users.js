const users = [];


function create(email, senha, admin) {

  const e = typeof(email);
  const s = typeof(senha);
  const a = typeof(admin);

  id = Math.floor(1000 * Math.random() + 1);

  if (email, senha, admin != null) {
      if (e == s) {
          users.push({
              id,
              email: email.toUpperCase(),
              senha: senha.toUpperCase(),
              admin: admin
          })
          console.log('Usuário criado com sucesso!');

      } else {
          console.log('O email ou senha está incorreto.');
      }

  } else {
    console.log("Todos os campos devem estar preenchidos");
  }
}


function findByPk(id, email) {

  const findId = users.find(idUser => idUser.id == id );

  const findEmail = users.find(emailUser => emailUser.email == email );
  
  if(findId && findEmail) {
    console.log(`Usuário encontrado com o id: ${id} \n e o email: ${email}`);
  }
  else {
    console.log('Usuário não encontrado com este id.')
  }
     
}


function login(email, password){
  const userEmail = users.find(idUserEmail => idUserEmail.email == email);
  const index = users.indexOf(userEmail);
  if (userEmail){
      const findUserPassword = users[index].password == password;
      if (findUserPassword){
          console.log(`Usuário ${email} conectado`);
      }else{
          console.log("Senha inválida");
      }
  }
  else 
      console.log("Usuário não encontrado");
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
