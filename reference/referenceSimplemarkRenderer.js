// @flow
import React from 'react';

// unstyled reference Simplemark renderers
// the props they receive are provided as flow types for reference
// but you do not need to to use flow when creating your renderers

// all renderers are required
// all renderers must return a ReactElement or null

const Heading = (props: { level: number, children: any }) => {
  const H = `h${props.level}`;
  return <H>{props.children}</H>;
};

const Paragraph = (props: { children: any }) => {
  return <p>{props.children}</p>;
};

const Link = (props: { href: string, title?: string, children: any }) => {
  return <a href={props.href} title={props.title}>{props.children}</a>;
};

const Emph = (props: { children: any }) => {
  return <em>{props.children}</em>;
};

const Strong = (props: { children: any }) => {
  return <strong>{props.children}</strong>;
};

const Softbreak = () => {
  // to render a space instead, return <span>{' '}</span>
  return <br />;
};

export default {
  renderers: {
    Heading,
    Paragraph,
    Link,
    Emph,
    Strong,
    Softbreak,
  },
};
