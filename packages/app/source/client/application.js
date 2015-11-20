Space.Application.extend(Projections, 'App', {
  requiredModules: [
    'Space.flux'
  ],

  stores: [
    'Projections.CartStore'
  ],

  components: [
    'Projections.CartView'
  ]
});
