// @flow
import React from 'react';
import PropTypes from 'prop-types';

export default class Simplemark extends React.PureComponent {
  props: {
    children: string | null,
    as?: string | Function,
  };

  static propTypes = {
    children: PropTypes.string,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  };

  static defaultProps = {
    children: null,
  };

  static contextTypes = {
    reactSimplemark: PropTypes.shape({
      render: PropTypes.func.isRequired,
      containerProps: PropTypes.object,
    }).isRequired,
  };

  render() {
    if (this.props.children === null) return null;
    const props = this.context.reactSimplemark.containerProps !== undefined
      ? { ...this.context.reactSimplemark.containerProps, ...this.props }
      : this.props;
    const { as, children, ...rest } = props;
    const As = as || 'div';
    return (
      <As {...rest}>
        {this.context.reactSimplemark.render(children)}
      </As>
    );
  }
}
