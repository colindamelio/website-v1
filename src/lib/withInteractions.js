import React, { Component } from 'react';

const withInteractions = WrappedComponent => {
  return class Interactable extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
      this.onMouseMove = this.onMouseMove.bind(this);

      this.state = {
        isHovering: false,
      };
    }

    onMouseMove(e) {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;

      e.target.style.setProperty('--x', `${x}px`);
      e.target.style.setProperty('--y', `${y}px`);
    }

    render() {
      return (
        <WrappedComponent
          onMouseMove={this.onMouseMove}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
};

export default withInteractions;
