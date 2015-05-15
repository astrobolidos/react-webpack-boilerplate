// based on
// http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html

var React = require('react/addons');

var BoilerplateApp = React.createClass({
  render: function () {
    return (
      <h1>Hello world! yo!</h1>
    );
  }
});

React.render(<BoilerplateApp />, document.body);