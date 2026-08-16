
function greet(user: { name: string; age: number }) {
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

greet({
    name: "Avanti",
    age: 19,
});

let user = {
    name: "Advik",
    age: 3,
};

greet(user);

