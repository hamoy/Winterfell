var React = require('react');

class HiddenInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value
		};
	}

	render() {
		return (
			<input type="hidden"
				   name={this.props.name}
				   value={this.state.value}/>
		);
	}

}
;

HiddenInput.defaultProps = {
<<<<<<< HEAD
	name: undefined,
	value: undefined
=======
  name  : '',
  value : ''
>>>>>>> upstream/master
};

module.exports = HiddenInput;