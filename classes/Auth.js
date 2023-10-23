const Customer = require("./Customer");

class Auth {
  constructor() {
    this.customers = [];
  }
  register(name, email, shippingAddress) {
    this.customers.push(new Customer(name, email, shippingAddress));
  }
  login(email) {
    for (let x of this.customers) {
      if (x.email === email) {
        return x;
      } else {
        return null;
      }
    }
  }
}

let auth = new Auth();
auth.register("Kaiya", "Kaiya@example.com", "121 Main St");
auth.register("Nina", "Nina@example.com", "22 Broadway St");

// console.log(auth.customers[0]);
// console.log(auth.customers[0].email);
console.log(auth.login("Kaiya@example.com"));

module.exports = Auth;
