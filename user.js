// A third way to export would be inline by writing export default before the class and export before the functions..
export default class User {
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