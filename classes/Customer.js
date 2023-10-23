class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.orderHistory = [];
    this.rewardPoints = 0;
  }
  addToOrderHistory(cart) {
    this.orderHistory.push(cart);
  }
}

module.exports = Customer;
