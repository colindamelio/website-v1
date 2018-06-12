import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import styled from 'styled-components';

import HomeButton from './HomeButton';
import Project from './Project';

const Wrapper = styled.div`
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	min-height: 100vh;
`;

const StyledRouterLink = styled(Link)`
	display: block;
	margin: 25px 0 0;
	text-align: center;
`;

const Projects = ({ items }) => (
	<Wrapper>
		<StyledRouterLink to="/">
			<HomeButton />
		</StyledRouterLink>

		<Project items={items} />
	</Wrapper>
);

Projects.propTypes = {
	items: PropTypes.array,
};

export default Projects;
