Space.flux.Store.extend(Projections, 'CartStore', {

  _products: ['Laptop', 'Bike', 'Car', 'T-Shirt', 'Coke', 'Beer'],

  reactiveVars() {
    return [{
      availableProducts: this._products
    }];
  }

});
