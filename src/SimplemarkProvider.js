// @flow
import React from 'react';
import PropTypes from 'prop-types';
import simplemark from 'simplemark';
import warning from 'warning';

export default class SimplemarkProvider extends React.Component {
  props: {
    children?: any,
    renderer: {},
    containerProps: {},
  };

  static propTypes = {
    children: PropTypes.node,
    renderer: PropTypes.object.isRequired,
    containerProps: PropTypes.object,
  };

  static childContextTypes = {
    reactSimplemark: PropTypes.shape({
      render: PropTypes.func.isRequired,
      containerProps: PropTypes.object,
    }).isRequired,
  };

  renderer = this.props.renderer;

  renderSimeplmark = (source: string): Array<React$Element<any>> =>
    simplemark(source, this.renderer);

  // props passed down to every instance of <Markdown>
  containerProps = this.props.containerProps;

  componentWillReceiveProps(nextProps: { renderer: {}, containerProps: {} }) {
    warning(
      this.props.renderer === nextProps.renderer &&
        (Object.keys(nextProps.renderer).length ===
          Object.keys(this.props.renderer).length &&
          Object.keys(nextProps.renderer).every(
            key => this.props.renderer[key] === nextProps.renderer[key],
          )),
      'You cannot change the renderer for <SimplemarkProvider>',
    );
    warning(
      this.props.containerProps === nextProps.containerProps &&
        (!this.props.containerProps ||
          (Object.keys(nextProps.containerProps).length ===
            Object.keys(this.props.containerProps).length &&
            Object.keys(nextProps.containerProps).every(
              key =>
                this.props.containerProps[key] ===
                nextProps.containerProps[key],
            ))),
      'You cannot change the containerProps for <SimplemarkProvider>',
    );
  }

  getChildContext() {
    return {
      reactSimplemark: {
        render: this.renderSimeplmark,
        containerProps: this.containerProps,
      },
    };
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}
