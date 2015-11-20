Space.messaging.Controller.extend(Projections, 'CartController', {

  dependencies: {
    configuration: 'configuration'
  },

  eventSubscriptions() {
    return [{
      'Projections.ProductAdded': this._onProductAdded,
      'Projections.ProductRemoved': this._onProductRemoved
    }];
  },

  _onProductAdded(event) {
    this.send(new Projections.AddProductToCart({
      targetId: this.configuration.cartId,
      productTitle: event.productTitle
    }));
  },

  _onProductRemoved(event) {
    this.send(new Projections.RemoveProductFromCart({
      targetId: this.configuration.cartId,
      productTitle: event.productTitle
    }));
  }

});
