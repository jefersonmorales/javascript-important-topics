function methodOne(lastName, firstName) {
    console.log(`${firstName} ${lastName}`);
}

methodOne('Jeferson', 'Morales');

// usando una expresión de función. 
// Recuerde que ahí es donde declaramos una función pero la almacenamos dentro de una variable.

methodTwo = function (firstName, lastName) {
    console.log(`${lastName} ${firstName}`);
}

methodTwo('Morales', 'Andrea')

// Arrow Function
// Funcion de flecha

helloWorld = () => {console.log("Hi there"); }
helloWorld();

// usando un argumento no es necesario poner parentesis ()
firstName = fName => {
    console.log(fName.toUpperCase());
}
firstName('Jeferson');

// Usando mas de un argumento es necesario poner parentesis ()
fullName = (fName, lName) => {
    console.log(fName, lName);
 }
fullName('Carla', 'Restrepo');