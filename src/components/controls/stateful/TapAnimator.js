import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';

const WithTapAnimated = (Child, callback) => {
  return class TapAnimator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isTapped: false
      };

      this.onMouseDown = this.onMouseDown.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
    }

    onMouseDown(e) {
      this.setState({isTapped: true});
    }

    onMouseUp(e) {
      this.setState({isTapped: false});

      if(callback) {
        // add small delay for better UX
        setTimeout(() => {
          callback();
        }, 250);
      }
    }

    render() {
      let isTapped = this.state.isTapped;

      return (
        <Motion defaultStyle={{ scale: 1}}
                style={{ scale: spring(isTapped ? 0.97 : 1)}}>
          {style => (
             <div style={{ transform: `scale(${style.scale})`}}
                  onMouseDown={this.onMouseDown}
                  onMouseUp={this.onMouseUp}>
                <Child {...this.props}/>
              </div>
           )}
        </Motion>
      );
    }
  }
}

WithTapAnimated.propTypes = {
  Child: PropTypes.object.isRequired,
  callback: PropTypes.object.isRequired
};


export default WithTapAnimated;
