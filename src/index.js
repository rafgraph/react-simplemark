// @flow
import React from 'react';
import PropTypes from 'prop-types';
import simplemark from 'simplemark';
import basicRenderer from './basicRenderer';

export default class Simplemark extends React.PureComponent {
  props: {
    children: string | null,
    as: string | Function,
    renderer: {},
  };

  static propTypes = {
    children: PropTypes.string,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    renderer: PropTypes.object,
  };

  static defaultProps = {
    children: null,
    as: 'div',
    renderer: {},
  };

  static createRenderer(renderer) {
    return {
      ...basicRenderer,
      ...renderer,
    };
  }

  renderer = Simplemark.createRenderer(this.props.renderer);

  componentWillReceiveProps(nextProps: { renderer: {} }) {
    if (this.props.renderer !== nextProps.renderer)
      this.renderer = Simplemark.createRenderer(this.props.renderer);
  }

  render() {
    if (this.props.children === null) return null;
    const { as, children, ...rest } = this.props;
    delete rest.renderer;
    const As = as;
    return (
      <As {...rest}>
        {simplemark(children, this.renderer)}
      </As>
    );
  }
}
