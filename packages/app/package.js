Package.describe({
  name: 'projections:app',
  version: '0.1.0',
  summary: 'The UI application of the shopping-cart example'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
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
    'source/client/application.js',
    'source/client/startup.js'
  ], 'client');

  api.addFiles([
    'source/server/application.js',
    'source/server/startup.js'
  ], 'server');

});
