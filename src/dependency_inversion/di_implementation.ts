/**
 * Dependency Inversion Principle Explained - SOLID Design Principles
 * By Web Dev Simplified
 *
 * @see https://youtu.be/9oHY5TllWaU
 */

export class Store {
  sripe: Stripe;
  constructor(user: string) {
    this.sripe = new Stripe(user);
  }

  purchaseBike(quantity) {
    this.sripe.makePayment(200 * quantity * 100);
  }

  purchaseHelmet(quantity) {
    this.sripe.makePayment(15 * quantity * 100);
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
