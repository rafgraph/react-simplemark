// @flow
import React from 'react';

const Heading = (props: { level: number, children: any, key: number }) => {
  const H = `h${props.level}`;
  return <H key={props.key}>{props.children}</H>;
};

const Paragraph = (props: { children: any, key: number }) => {
  return <p key={props.key}>{props.children}</p>;
};

const Link = (props: {
  href: string,
  title?: string,
  children: any,
  key: number,
}) => {
  return (
    <a href={props.href} title={props.title} key={props.key}>
      {props.children}
    </a>
  );
};

const Emph = (props: { children: any, key: number }) => {
  return <em key={props.key}>{props.children}</em>;
};

const Strong = (props: { children: any, key: number }) => {
  return <strong key={props.key}>{props.children}</strong>;
};

const InlineBreak = (props: { key: number }) => {
  return <br key={props.key} />;
};

const BlockBreak = (props: { key: number }) => {
  return <br key={props.key} />;
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
