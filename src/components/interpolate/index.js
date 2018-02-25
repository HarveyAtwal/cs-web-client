import React from 'react'
import { translate } from 'react-polyglot';

class Interpolate extends React.Component {

  renderComponents(string) {
    const { keys } = this.props;
    const components = [];

    for(const key in keys) {
      const strings = string.split('%{' + key + '}');

      if(strings.length > 1) {
        components.push(strings[0]);
        components.push(keys[key]);

        string = strings[1];
      }
    }

    return components;
  }

  render() {
    const { props } = this;
    return this.renderComponents(props.t(props.text))
  }
}

export default translate()(Interpolate)
