Package.describe({
  name: 'cart:domain',
  version: '0.1.0',
  summary: 'Bounded context for shopping cart domain'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'space:domain@0.1.0',
    'space:event-sourcing@2.1.0',
    'cart:contract'
  ]);

  api.addFiles([
    'source/server/module.js'
  ], 'server');

});


Package.onTest(function(api) {

  api.use([
    'ecmascript',
    'space:testing@2.0.0',
    'cart:contract',
    'cart:domain',
    'practicalmeteor:munit@2.1.5'
  ]);

  api.addFiles([
  ], 'server');

});
