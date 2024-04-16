var person = {
    name: "James Smith",
    hello: function (thing, end) {
        console.log(this.name + " says hello " + thing + " " + end);
    },
};

person.hello("world", "super"); // output: "James Smith says hello world"

person.hello.call({ name: "Jim Smith" }, "world", "super"); // output: "Jim Smith says hello world"

person.hello.apply({ name: "Jon"} ,["world", "super"]); // output: "Jim Smith says hello world"