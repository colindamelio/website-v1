import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
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

const Overlay = styled.a`
  display: ${props => (props.loaded ? 'flex' : 'none')}
  flex-direction: column;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.9);
  padding: 15px;
`;

const Tag = styled.h3`
  font-size: 13px;
  margin-top: 0;
`;

const Title = styled.h2``;
const Description = styled.p``;

class Project extends Component {
  state = {
    imageLoaded: false,
  };

  renderImage = () => {
    this.setState({
      imageLoaded: true,
    });
  };

  render() {
    const { items } = this.props;
    const { imageLoaded } = this.state;
    return (
      <Container>
        {items.map((item, key) => (
          <Item key={key}>
            <Image src={item.src} alt={item.alt} onLoad={this.renderImage} />

            <Overlay href={item.href} target="_blank" loaded={imageLoaded}>
              <Title>{item.title}</Title>
              {item.company && <Tag>{`Built at ${item.company}`}</Tag>}
              <Description>{item.desc}</Description>
            </Overlay>
          </Item>
        ))}
      </Container>
    );
  }
}

Project.propTypes = {
  items: PropTypes.array,
};

export default Project;
