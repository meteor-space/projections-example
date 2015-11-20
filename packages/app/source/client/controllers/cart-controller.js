Space.messaging.Controller.extend(Projections, 'CartController', {

  dependencies: {
    cartStore: 'Projections.CartStore'
  },

  eventSubscriptions() {
    return [{
      'Projections.ProductAdded': this._onProductAdded,
      'Projections.ProductRemoved': this._onProductRemoved
    }];
  },

  _onProductAdded(event) {
    this.send(new Projections.AddProductToCart({
      targetId: this.cartStore.cartId(),
      productTitle: event.productTitle
    }));
  },

  _onProductRemoved(event) {
    this.send(new Projections.RemoveProductFromCart({
      targetId: this.cartStore.cartId(),
      productTitle: event.productTitle
    }));
  }

});
