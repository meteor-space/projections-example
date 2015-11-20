Space.flux.Store.extend(Projections, 'CartStore', {

  dependencies: {
    configuration: 'configuration',
    products: 'Projections.Products',
    carts: 'Projections.Carts',
    tracker: 'Tracker'
  },

  reactiveVars() {
    return [{
      available: [],
      picked: []
    }];
  },

  sessionVars() {
    return [{
      cartId: this.configuration.cartId
    }];
  },

  computations() {
    return [
      this._calcAvailableProducts
    ];
  },

  _calcAvailableProducts() {
    let products = this.products.find().map(function(p) { return p.title; });
    let cart = this.carts.findOne(this.cartId());
    if (products && cart) {
      this._setReactiveVar('available', _.difference(products, cart.products));
      this._setReactiveVar('picked', cart.products);
    }
  }

});
