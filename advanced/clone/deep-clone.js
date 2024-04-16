const person = {
    name: "hello",
    "max-pay": 100,
    courses: [
        {
            name: "c1",
        },
        {
            name: "c2",
        },
    ],
    print: function() {
        console.log(this.name);
    }
};

let person1 = { ...person };

// person.name = "Naina";

console.log(person1.print());
// console.log(person);
