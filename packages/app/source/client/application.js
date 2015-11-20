Space.Application.extend(Projections, 'App', {

  configuration: {},

  requiredModules: [
    'Space.flux'
  ],

  stores: [
    'Projections.CartStore'
  ],

  controllers: [],

  components: [
    'Projections.CartView'
  ]

});
