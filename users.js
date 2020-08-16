const users = [{
  id: 1,
  email: 'daniele_oli_lucas@hotmail.com',
  password: '123456',
  admin: false
},
{
  id: 2,
  email: 'yuri@hotmail.com',
  password: '654321',
  admin: true
},
{
  id: 3,
  email: 'aline@hotmail.com',
  password: '555555',
  admin: false
}];


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

destroy(2);

index();


