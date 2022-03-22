/**
 * Dependency Inversion Principle Explained - SOLID Design Principles
 * By Web Dev Simplified
 *
 * @see https://youtu.be/9oHY5TllWaU
 */

export class Store {
  sripe: Stripe;
  paypal: Paypal;
  user: string;
  constructor(user: string) {
    this.paypal = new Paypal();
    this.user = user;
    // this.sripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.paypal.makePayment(this.user, 200 * quantity);
    // this.sripe.makePayment(200 * quantity * 100);
  }
  
  purchaseHelmet(quantity) {
    this.paypal.makePayment(this.user, 15 * quantity);
    // this.sripe.makePayment(15 * quantity * 100);
  }
}

class Stripe {
  user: string;
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made a payment of ${amountInCents / 100} with Stripe`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made a payment of ${amountInDollars} with Paypal`);
  }
}

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);
