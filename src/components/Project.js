import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fadeIn } from '../lib/animations';

const Container = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	margin: 40px auto 0;
	padding: 0 20px;
`;

const Item = styled.li`
	position: relative;
	max-width: 400px;
	margin-bottom: 25px;
	box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
	animation: ${fadeIn} 5s ease;
`;

const Image = styled.img`
	display: block;
	text-align: center;
	width: 100%;
`;

const Overlay = styled.a`
	display: flex;
	flex-direction: column;
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	color: #272727;
	background: rgba(255, 255, 255, 0.9);
	padding: 15px;
`;

const Title = styled.h2``;

const Tag = styled.h3`
	font-size: 13px;
	margin-top: 0;
`;

const Description = styled.p``;

const Project = ({ items }) => (
	<Container>
		{items.map(item => (
			<Item key={item.title}>
				<Image src={item.src} alt={item.alt} />
				<Overlay href={item.href} target="_blank">
					<Title>{item.title}</Title>
					<Tag>{`Built at ${item.company}`}</Tag>
					<Description>{item.desc}</Description>
				</Overlay>
			</Item>
		))}
	</Container>
);

Project.propTypes = {
	items: PropTypes.array,
};

export default Project;
