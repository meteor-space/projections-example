describe("Projection.CartStore", function() {

  it("sets up correct default values", function() {
    Projections.App.test(Projections.CartStore)
    .expect({
      availableProducts: ['Laptop', 'Bike', 'Car', 'T-Shirt', 'Coke', 'Beer'],
      pickedProducts: []
    });
  });

  describe("adding a product", function() {

    it("adds it to the picked and removes it from the availables", function() {
      Projections.App.test(Projections.CartStore)
      .given({
        availableProducts: ['first', 'second', 'third'],
        pickedProducts: []
      })
      .when([
        new Projections.ProductAdded({
          productTitle: 'first'
        })
      ])
      .expect({
        availableProducts: ['second', 'third'],
        pickedProducts: ['first']
      });
    });

  });

  describe("removing a product", function() {

    it("removes it from the picked and pushes it to the availables", function() {
      Projections.App.test(Projections.CartStore)
      .given({
        availableProducts: ['second', 'third'],
        pickedProducts: ['first']
      })
      .when([
        new Projections.ProductRemoved({
          productTitle: 'first'
        })
      ])
      .expect({
        availableProducts: ['second', 'third', 'first'],
        pickedProducts: []
      });
    });

  });

});
