import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			filterValue: ''
		};
	}

	updateFilterValue = function(e) {
		this.setState({
			filterValue: e.target.value
		});
	}

	submitFilter = (e) => {
		e.preventDefault();
		this.props.handleFilter(this.state.filterValue);
	}

	render() {
		return (
			<div className="filter-wrapper">
				<form onSubmit={this.submitFilter}>
					<input
						className="filter-input input-style"
						type="text"
						name="filter"
						placeholder="Filter by email"
						alue={this.state.filterValue}
						onChange={e => this.updateFilterValue(e)}
					/>
					<Button className="filter-button" type="submit" bsStyle="primary" bsSize="large"><Glyphicon className="search" glyph="search" /> </Button>
				</form>
			</div>  
		);
	};
}


Filter.propTypes = {
	handleFilter: PropTypes.func.isRequired,
};

export default Filter;