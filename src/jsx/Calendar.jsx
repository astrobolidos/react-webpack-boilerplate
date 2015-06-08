var React 			= require('react/addons'); 
var TextField 		= require('material-ui').TextField;  
var Router 			= require('react-router');
var Link 			= Router.Link;

var Calendar = React.createClass({
  render: function() {
    return <div>Calendar
      <TextField floatingLabelText="Enter a Date" />
      <br/>
      <Link to="/">Dashboard</Link>
    </div>
  }
})

module.exports = Calendar;