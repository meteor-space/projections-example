Package.describe({
  name: 'projections:app',
  version: '0.1.0',
  summary: 'The UI application of the shopping-cart example'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([
    'underscore',
    'blaze-html-templates',
    'ecmascript',
    'peerlibrary:blaze-components@0.13.0',
    'space:flux@0.6.0',
    'space:domain@0.1.0',
    'space:event-sourcing@2.1.0',
    'cart:contract',
    'cart:domain'
  ]);

  api.addFiles([
    'source/shared/namespace.js'
  ]);

  api.addFiles([
    'source/client/styles/main.css',
    'source/client/views/index.html',
    'source/client/views/cart.html',
    'source/client/views/cart.js',
    'source/client/stores/cart-store.js',
    'source/client/events.js',
    'source/client/application.js',
    'source/client/startup.js'
  ], 'client');

  api.addFiles([
    'source/server/application.js',
    'source/server/startup.js'
  ], 'server');

  api.export('Projections');

});

Package.onTest(function(api) {

  api.use([
    'ecmascript',
    'space:testing@2.0.0',
    'projections:app',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
    'tests/client/stores/cart-store.tests.js'
  ], 'client');

});
