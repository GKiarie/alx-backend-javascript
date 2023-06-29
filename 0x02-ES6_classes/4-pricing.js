import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    //   super(currency.code, currency.name);
    this._amount = 0;
    this._currency = null;

    // Set values using the setter methods
    this.amount = amount;
    this.currency = currency;
  }

  // Getter and setter for the 'amount' attribute
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === 'number') {
      this._amount = newAmount;
    } else {
      throw new Error('Amount must be a number');
    }
  }

  // Getter and setter for the 'currency' attribute
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new Error('Currency must be an instance of the Currency class');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new Error('Amount and conversionRate types must be "Number"');
  }
}
