// based on
// http://christianalfoni.github.io/javascript/2014/12/13/did-you-know-webpack-and-react-is-awesome.html

var React = require('react/addons');
window.React = React;
var TextField = require('material-ui').TextField;

// var injectTapEventPlugin = require("react-tap-event-plugin");
// // injectTapEventPlugin();
//     	<TextField
//   			hintText="Hint Text"
//   			floatingLabelText="Floating Label Text" />	
var BoilerplateApp = React.createClass({
  render: function () {
    return (<div>
      <h1>Hello world! yo!</h1>
      welcome.
      <TextField floatingLabelText="hi"/>
    </div>);
  }
});

React.render(<BoilerplateApp />, document.body); 