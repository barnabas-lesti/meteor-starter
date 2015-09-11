Router.configure({
  layoutTemplate: 'main'
});

// given the url: '/some-page?q=some-query#some-hash' (query and hash is optional)
Router.route('/some-page', {
  name: 'somePage',
  action: function() {
    var queryArray = Object.keys(this.params.query).map(function(k, v) {
      return { key: k, value: v };
    });
    this.render('somePage', {
      data: {
        query: queryArray,
        hash: this.params.hash
      }
    });
  }
});

Router.route('/some-page/:param', {
  action: function() {
    this.render('somePage', {
      data: {
        param: this.params.param
      }
    });
  }
});
