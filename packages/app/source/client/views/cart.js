Space.flux.BlazeComponent.extend(Projections, 'CartView', {

  onExtending() {
    this.register('cart_view');
  },

  dependencies: {
    cartStore: 'Projections.CartStore'
  },

  availableProducts() {
    return this.cartStore.availableProducts();
  }

});
