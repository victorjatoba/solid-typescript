/**
 * Dependency Inversion Principle Explained - SOLID Design Principles
 * By Web Dev Simplified
 *
 * @see https://youtu.be/9oHY5TllWaU
 */

class Store {
  sripe: Stripe;
  constructor(user) {
    this.sripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.sripe.makePayment(200 * quantity * 100);
  }
}

class Stripe {
  user: any;
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made a payment of ${amountInCents / 100} with Stripe`
    );
  }
}

class Paypal {}
