import { customer } from "@ungap/global-this";

var Customer1 = (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    return Customer;
})();
var customer1 = new Customer1();
customer1.firstName = 'Marina';
customer1.lastName = 'Sav';
customer1.greeter()