import React, {Component} from 'react';
import WithTapAnimated from '../stateful/TapAnimator';

class TestControl extends Component {
  render() {
    return (
        <div>
            <h1>Testing testing...</h1>
        </div>
    );
  }
}

export default WithTapAnimated(TestControl);
