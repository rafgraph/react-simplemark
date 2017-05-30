# React Simplemark

[Live Example](http://simplemark.rafrex.com)

React component and renderer for [Simplemark](https://github.com/rafrex/simplemark) (*never* uses `dangerouslySetInnerHTML`). Code styled with Prettier.

```shell
$ yarn add react-simplemark
# OR
$ npm install --save react-simplemark
```

```js
import React from 'react';
import Simplemark from 'react-simplemark';

const stringContainingSimplemarkSource = '# Simplemark Parser is Small ~1KB!!';

class App extends React.Component {
  render() {
    return (
      <Simplemark>
        {stringContainingSimplemarkSource}
      </Simplemark>
    );
  }
}
```

```js
// you can optionally provide `renderer` and `as` props to <Simplemark>
// (as well as pass through props for the container)
...
<Simplemark as="div" renderer={customRenderer} className="simplemark-container">
  {stringContainingSimplemarkSource}
</Simplemark>
```

## API
### `<Simplemark>`
#### `children: string`
- String containing the Simplemark source to render
- Not required, but if not provided `<Simplemark>` returns `null` and does not render

#### `as: string | ReactComponent`
- Not required, default is `'div'`
- What the markdown container element is rendered as
- String as an html tag name, e.g. `'div'` will render a `<div>` container, `'section'` will render a `<section>` container, etc...
- If you provide a `ReactComponent` instead of a string, the rendered markdown will be passed down as an array of `children` to that component

#### `renderer: object`
- Not required, but if it is not provided unstyled ReactElements will be created
- Object with React Components for each type of element created by Simplemark
- For a reference `renderer` with bare bones React Components see [`basicRenderer.js`](https://github.com/rafrex/react-simplemark/blob/master/src/basicRenderer.js)
```js
const renderer = {
  Heading: /* ReactComponent */,
  Paragraph: /* ReactComponent */,
  Link: /* ReactComponent */,
  Emph: /* ReactComponent */,
  Strong: /* ReactComponent */,
  InlineBreak: /* ReactComponent */,
  BlockBreak: /* ReactComponent */,
};
```

#### `...rest`
- All other props will be passed down to the markdown container element, e.g. `className`, `style`, etc...
- For example `<Simplemark as="section" className="simplemark-container"># Some Heading</Simplemark>` will render on the page as `<section class="simplemark-container"><h1>Some Heading</h1><section/>`
