import React from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

const Home = ({ menuItems }) => (
	<div>
		<Menu items={menuItems} />
	</div>
);

Home.propTypes = {
	menuItems: PropTypes.array,
};

export default Home;
