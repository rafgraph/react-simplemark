import React from 'react';
import PropTypes from 'prop-types';
import simplemark from 'simplemark';
import simplemarkReactRenderer from './simplemarkReactRenderer';

const Simplemark = React.forwardRef(
  (
    {
      as = 'div',
      children = null,
      renderer = {},
      // containerRef = null,
      ...rest
    },
    ref,
  ) => {
    if (children === null) return null;

    const As = as;
    return (
      <As ref={ref} {...rest}>
        {simplemark(children, {
          ...simplemarkReactRenderer,
          ...renderer,
        })}
      </As>
    );
  },
);

Simplemark.propTypes = {
  children: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  renderer: PropTypes.object,
};

export default Simplemark;
