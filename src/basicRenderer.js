// @flow
import React from 'react';

export default {
  Heading(props: { level: number, children: any, key: number }) {
    const H = `h${props.level}`;
    return <H key={props.key}>{props.children}</H>;
  },

  Paragraph(props: { children: any, key: number }) {
    return <p key={props.key}>{props.children}</p>;
  },

  Link(props: { href: string, title?: string, children: any, key: number }) {
    return (
      <a href={props.href} title={props.title} key={props.key}>
        {props.children}
      </a>
    );
  },

  Emph(props: { children: any, key: number }) {
    return <em key={props.key}>{props.children}</em>;
  },

  Strong(props: { children: any, key: number }) {
    return <strong key={props.key}>{props.children}</strong>;
  },

  InlineBreak(props: { key: number }) {
    return <br key={props.key} />;
  },

  BlockBreak(props: { key: number }) {
    return <br key={props.key} />;
  },
};
