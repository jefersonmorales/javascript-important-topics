let playerOne = 'Andrea';
let playerTwo = 'Maribel';

// La magia de esto es usando los corchetes []

[playerOne, playerTwo] = [playerTwo, playerOne];

console.log(`
playerOne: ${playerOne}
playerTwo: ${playerTwo}
`);


// LA FORMA ANTIGUA

// let tempPlayerOne = playerOne;
// let tempPlayerTwo = playerTwo;

// playerOne = tempPlayerTwo;
// playerTwo = tempPlayerOne;

// console.log(`
// playerOne: ${playerOne}
// playerTwo: ${playerTwo}
// `);