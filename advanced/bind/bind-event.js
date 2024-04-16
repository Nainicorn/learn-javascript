const person = {
    name: 'Naina',
    printName: function () {
        console.log(this.name);
        setTimeout(function() {
            console.log(this.name);
        }.bind(this), 500);        
    }
}

person.printName()