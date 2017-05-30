var React = require('react');

class CheckboxInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			checked: props.value
		};
	}

	handleChange(e) {
		if (e) {
			this.setState({
				'checked': !this.state.checked
			}, () => {
				this.props.onChange(this.state.checked);
			});
		} else {
			this.props.onChange(this.state.checked);
		}
	}

	componentDidMount() {
		if (this.state.checked) {
			this.handleChange();
		}
	}

	render() {
		return (
			<div className={this.props.classes.checkboxInput}>
				<label className={this.props.classes.checkboxLabel}
					   id={this.props.labelId}>
					<input type="checkbox"
						   name={this.props.name}
						   aria-labelledby={this.props.labelId}
						   className={this.props.classes.checkbox}
						   defaultChecked={this.state.checked}
						   value={true}
						   checked={this.state.checked}
						   required={this.props.required
							   ? 'required'
							   : undefined}
						   onChange={this.handleChange.bind(this)}
						   onBlur={this.props.onBlur.bind(null, this.state.checked)}/>
					{this.props.text}
				</label>
			</div>
		);
	}

}

CheckboxInput.defaultProps = {
  text     : '',
  defaultChecked: false,
  classes  : {},
  name     : '',
  value    : '',
  onChange : () => {},
  onBlur   : () => {}
};

module.exports = CheckboxInput;
