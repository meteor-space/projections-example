Space.Application.extend(Projections, 'App', {

  configuration: {
    appId: 'Projections.App',
    cartId: 'MyCart123'
  },

  requiredModules: [
    'Space.flux'
  ],

  stores: [
    'Projections.CartStore'
  ],

  controllers: [
    'Projections.CartController'
  ],

  components: [
    'Projections.CartView'
  ],

  singletons: [
    'Projections.CartApi'
  ],

  onInitialize() {
    if (Projections.Carts.find().count() === 0) {
      Projections.Carts.insert({ _id: this.configuration.cartId, products: [] });
    }
    if (Projections.Products.find().count() === 0) {
      for (title of ['Laptop', 'Bike', 'Car', 'T-Shirt', 'Coke', 'Beer']) {
        Projections.Products.insert({ title: title });
      }
    }
  }

});
