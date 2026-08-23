const greeting: string = "Helloo!!";
const currentYear: number = 2026;

function calculateAge(birthYear: number): number {
    return currentYear - birthYear;
}

console.log(greeting);

const age = calculateAge(2007);
console.log(`You have turned ${age} years old.`);

