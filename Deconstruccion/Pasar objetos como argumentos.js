const user = {
    name: 'Jeferson',
    email: 'jefer@devcamp.com',
    old: 22,
    nationality: 'colombian'
}

const renderUser = ({name, email}) => {
    console.log(`${name}: ${email}`);
}

renderUser(user);

const oldUser = ({name, old}) => {
    console.log(`${name}: ${old}`);
}

oldUser(user);

const nationalityUser = ({name, nationality}) => {
    return `${name}'s ${nationality}`;
}

console.log(nationalityUser(user));