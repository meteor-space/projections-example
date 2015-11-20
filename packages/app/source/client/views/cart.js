Space.flux.BlazeComponent.extend(Projections, 'CartView', {

  onExtending() {
    this.register('cart_view');
  },

  dependencies: {
    cartStore: 'Projections.CartStore'
  },

  availableProducts() {
    return this.cartStore.available();
  },

  pickedProducts() {
    return this.cartStore.picked();
  },

  events() {
    return [{
      'click .available .product'(event) {
        this.publish(new Projections.ProductAdded({
          productTitle: $(event.currentTarget).text()
        }));
      },
      'click .picked .product'(event) {
        this.publish(new Projections.ProductRemoved({
          productTitle: $(event.currentTarget).text()
        }));
      }
    }];
  }

});
