import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) => {
  const H = `h${props.level}`;
  return <H key={props.key}>{props.children}</H>;
};
Heading.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.node,
  key: PropTypes.number.isRequired,
};

const Paragraph = (props) => {
  return <p key={props.key}>{props.children}</p>;
};
Paragraph.propTypes = {
  children: PropTypes.node,
  key: PropTypes.number.isRequired,
};

const Link = (props) => {
  return (
    <a href={props.href} title={props.title} key={props.key}>
      {props.children}
    </a>
  );
};
Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  key: PropTypes.number.isRequired,
};

const Emph = (props) => {
  return <em key={props.key}>{props.children}</em>;
};
Emph.propTypes = {
  children: PropTypes.node,
  key: PropTypes.number.isRequired,
};

const Strong = (props) => {
  return <strong key={props.key}>{props.children}</strong>;
};
Strong.propTypes = {
  children: PropTypes.node,
  key: PropTypes.number.isRequired,
};

const InlineBreak = (props) => {
  return <br key={props.key} />;
};
InlineBreak.propTypes = {
  key: PropTypes.number.isRequired,
};

const BlockBreak = (props) => {
  return <br key={props.key} />;
};
BlockBreak.propTypes = {
  key: PropTypes.number.isRequired,
};

export default {
  Heading,
  Paragraph,
  Link,
  Emph,
  Strong,
  InlineBreak,
  BlockBreak,
};
