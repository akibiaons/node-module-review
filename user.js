// A third way to export would be inline by writing export default before the class and export before the functions..
export default class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Below is the inline export 
export function printName(user) {
    console.log(`User's name is ${user.name}`);
}
// Another export below same as above
export function printAge(user) {
    console.log(`User is ${user.age} years old`);
}

// Ther eare many different ways to export the classes and functions above. 

// The two options are default exports and standard exports.
// Below is the first way:
/* export default user */
//================================================
// Below is the normal export
/*
export default user
export {printName, printAge};
*/