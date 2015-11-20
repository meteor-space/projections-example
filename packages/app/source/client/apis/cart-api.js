Space.messaging.Api.extend(Projections, 'CartApi', {

  dependencies: {
    carts: 'Projections.Carts'
  },

  methods() {
    return [{
      'Projections.AddProductToCart': this._addProductToCart,
      'Projections.RemoveProductFromCart': this._removeProductFromCart
    }];
  },

  _addProductToCart(context, command) {
    if (context.isSimulation) {
      this.carts.update(command.targetId, {
        $push: { products: command.productTitle }
      });
    }
  },

  _removeProductFromCart(context, command) {
    if (context.isSimulation) {
      this.carts.update(command.targetId, {
        $pull: { products: command.productTitle }
      });
    }
  }

});
