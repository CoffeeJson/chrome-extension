var coffeeJson = 'https://raw.githubusercontent.com/RobertJGabriel/coffee-drink-types/master/coffee.json';

function sleep(time) {
    var d1 = new Date().getTime();
    var d2 = new Date().getTime();
    while (d2 < d1 + time) {
        d2 = new Date().getTime();
    }
    return;
}

new Vue({

    el: '#app',
    data: {
        coffees: [],
        coffeeTitle: "",
        coffeeDescription: "",
        numberOfCoffees: 0,
        currentCoffeeNumber: 0
    },
    beforeCompile() {
        sleep(3000);
    },

    mounted: function() {
        this.fetchCoffees();
    },

    methods: {
        fetchCoffees: function() {
            // GET /someUrl
            this.$http.get(coffeeJson).then(response => {

                this.coffees = JSON.parse(response.body).coffees; // Parse the coffee lists
                this.numberOfCoffees = this.coffees.length; // Number of Coffees in the list
                this.currentCoffeeNumber = Math.floor(Math.random() * this.numberOfCoffees); // Gets the list in
                this.coffeeTitle = this.coffees[this.currentCoffeeNumber].name;
                this.coffeeDescription = this.coffees[this.currentCoffeeNumber].description;

            }, response => {

            });
        }
    }

});
