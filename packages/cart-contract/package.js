Package.describe({
  name: 'cart:contract',
  version: '0.1.0',
  summary: 'API contract for interacting with the cart domain'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'space:domain@0.1.0',
    'space:event-sourcing@2.1.0'
  ]);

  api.addFiles([
    'source/server/namespace.js'
  ]);

  api.export('Cart');

});
