require('./scss/theme.scss')

var React = require('react/addons');
window.React = React; 

var Router = require('react-router');
var Routes = require('./jsx/routes.jsx');

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
