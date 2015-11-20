describe("Projections.CartStore", function() {

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
      .given({
        available: ['first', 'second', 'third'],
        picked: []
      })
      .when([
        new Projections.ProductAdded({
          productTitle: 'first'
        })
      ])
      .expect({
        available: ['second', 'third'],
        picked: ['first']
      });
    });

  });

  describe("removing a product", function() {

    it("removes it from the picked and pushes it to the availables", function() {
      Projections.App.test(Projections.CartStore)
      .given({
        available: ['second', 'third'],
        picked: ['first']
      })
      .when([
        new Projections.ProductRemoved({
          productTitle: 'first'
        })
      ])
      .expect({
        available: ['second', 'third', 'first'],
        picked: []
      });
    });

  });
});
