import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const NavItem = styled.li`
  margin: 20px 0;
  text-align: center;

  a {
    font-size: 30px;
  }
`;

const Menu = ({ items }) => (
  <Nav>
    <ul>
      {items.map(
        (item, key) =>
          item.isProjects ? (
            <NavItem key={key}>
              <Link to="projects">{item.title}</Link>
            </NavItem>
          ) : (
            <NavItem key={key}>
              <a href={item.href} aria-label={item.label} target="_blank">
                {item.title}
              </a>
            </NavItem>
          )
      )}
    </ul>
  </Nav>
);

Menu.propTypes = {
  items: PropTypes.array,
};

export default Menu;
