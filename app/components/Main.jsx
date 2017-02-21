var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Nav/>
				<h2>Main components</h2>
			</div>
		);
	}
});

module.exports = Main;