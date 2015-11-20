Space.flux.Store.extend(Projections, 'CartStore', {

  _products: ['Laptop', 'Bike', 'Car', 'T-Shirt', 'Coke', 'Beer'],

  reactiveVars() {
    return [{
      available: this._products,
      picked: []
    }];
  },

  eventSubscriptions() {
    return [{
      'Projections.ProductAdded': this._onProductAdded,
      'Projections.ProductRemoved': this._onProductRemoved
    }];
  },

  _onProductAdded(event) {
    let newPicked = this.picked();
    newPicked.push(event.productTitle);
    this._setReactiveVar('available', _.without(this.available(), event.productTitle));
    this._setReactiveVar('picked', newPicked);
  },

  _onProductRemoved(event) {
    let newAvailable = this.available();
    newAvailable.push(event.productTitle);
    this._setReactiveVar('available', newAvailable);
    this._setReactiveVar('picked', _.without(this.picked(), event.productTitle));
  }

});
