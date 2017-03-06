var React = require('react');

var WeatherMessage = React.createClass({
	render: function() {
		var {location, temp} = this.props;

		return (
			<h4>It is {temp} in {location}</h4>
		);
	}
});

module.exports = WeatherMessage;