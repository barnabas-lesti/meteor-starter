// An example server side route.
Router.route('/api/some-route', {
  name: 'api.someRoute',
  where: 'server', // This is mandatory, even though we are on the server.
  action: function () {
    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify({ someVariable: 'someValue' }));
  }
});
