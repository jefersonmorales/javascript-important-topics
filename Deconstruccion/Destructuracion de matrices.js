const apiList = [
    'https://api.dailysmarty.com/posts',
    'https://api.github.com/users/jordanhudgens/repos',
    'https://api.github.com/users/jordanhudgens'
  ]

const [posts, repos, profile] = apiList;
console.log(posts);
console.log(repos);
console.log(profile); 

/////////////////////////////////////////////

const user = {
    nombre: 'Jeferson',
    email: 'jeferson.devcamp.com'
}

const {nombre, email} = user;
console.log(nombre);
console.log(email);