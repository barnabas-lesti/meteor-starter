Router.route('/some-api', {
  name: 'someApi',
  where: 'server', // This is mandatory, even though we are on the server
  action: function () {
    this.response.setHeader('Content-Type', 'application/json');
    this.response.end(JSON.stringify({ someVariable: 'someValue' }));
  }
});
