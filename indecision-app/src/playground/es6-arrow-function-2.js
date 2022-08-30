// arguments object & this keyword are no longer bound 

// const add = function (a, b) {
//     console.log(arguments); - arguments can be accessed 
//     return a + b;
// };

const add = (a, b) => {
    // console.log(arguments); - arguments cannot be accessed 
    return a + b;
};

console.log (add(55, 1));


const user = {
    name: 'Andrew',
    cities: ['Waterloo', 'Mississauga', 'Toronto'],
    printPlacesLived() {
        // can't use arrow function because function goes out of scope to global, tries to acceess "this" and errors
        console.log(this.name);
        console.log(this.cities);

        // const that = this;

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
            // arrow function binds it's this value to it's parent
        });
    },

    printPlacesLived2() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

    }
};

console.log(user.printPlacesLived());
console.log(user.printPlacesLived2());

const multiplier = {
    numbers: [10, 20, 30], 
    multiplyBy: 3,

    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }

};

console.log(multiplier.multiply());
