describe("Projections.CartStore", function() {

  beforeEach(function() {
    this.cartId = Projections.App.prototype.configuration.cartId;
  });

  afterEach(function() {
    Projections.Carts.remove({});
    Projections.Products.remove({});
  });

  it("sets up correct default state", function() {
    Projections.App.test(Projections.CartStore)
    .expect({
      available: ['Laptop', 'Bike', 'Car', 'T-Shirt', 'Coke', 'Beer'],
      picked: []
    });
  });

  describe("adding a product", function() {

    it("adds it to the picked and removes it from the availables", function() {
      Projections.App.test(Projections.CartStore)
      .when([
        new Projections.AddProductToCart({
          targetId: this.cartId,
          productTitle: 'Laptop'
        })
      ])
      .expect({
        available: ['Bike', 'Car', 'T-Shirt', 'Coke', 'Beer'],
        picked: ['Laptop']
      });
    });

  });

  describe("removing a product", function() {

    it("removes it from the picked and pushes it to the availables", function() {
      Projections.App.test(Projections.CartStore)
      .when([
        new Projections.AddProductToCart({
          targetId: this.cartId,
          productTitle: 'Laptop'
        }),
        new Projections.RemoveProductFromCart({
          targetId: this.cartId,
          productTitle: 'Laptop'
        })
      ])
      .expect({
        available: ['Laptop', 'Bike', 'Car', 'T-Shirt', 'Coke', 'Beer'],
        picked: []
      });
    });

  });
});
