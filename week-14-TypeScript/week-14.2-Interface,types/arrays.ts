interface User {
firstName: string
lastName: string
age: number;
}

function filteredUsers(users: User[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "Avanti",
    lastName: "Konde",
    age: 19
}, {
    firstName: "Pradip",
    lastName: "Konde",
    age: 16
}, ]));


