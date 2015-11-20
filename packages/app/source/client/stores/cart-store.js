Space.flux.Store.extend(Projections, 'CartStore', {

  _products: ['Laptop', 'Bike', 'Car', 'T-Shirt', 'Coke', 'Beer'],

  reactiveVars() {
    return [{
      availableProducts: this._products,
      pickedProducts: []
    }];
  },

  eventSubscriptions() {
    return [{
      'Projections.ProductAdded': this._onProductAdded,
      'Projections.ProductRemoved': this._onProductRemoved
    }];
  },

  _onProductAdded(event) {
    let newPicked = this.pickedProducts();
    newPicked.push(event.productTitle);
    let newAvailable = _.without(this.availableProducts(), event.productTitle);
    this._setReactiveVar('availableProducts', newAvailable);
    this._setReactiveVar('pickedProducts', newPicked);
  },

  _onProductRemoved(event) {
    let newPicked = _.without(this.pickedProducts(), event.productTitle);
    let newAvailable = this.availableProducts();
    newAvailable.push(event.productTitle);
    this._setReactiveVar('availableProducts', newAvailable);
    this._setReactiveVar('pickedProducts', newPicked);
  }

});
