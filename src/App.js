import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from '@reach/router';

import Home from './components/Home';
import Projects from './components/Projects';

import { menuItems, projectItems } from './data/';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<Home path="/" menuItems={menuItems} />
				<Projects path="projects" items={projectItems} />
			</Router>
		);
	}
}

App.propTypes = {
	menuItems: PropTypes.array,
	projectItems: PropTypes.array,
};

export default App;
