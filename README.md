[![Published on NPM](https://img.shields.io/npm/v/l2t-fab-footer.svg)](https://www.npmjs.com/package/l2t-fab-footer)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/l2t-fab-footer)

## &lt;l2t-fab-footer&gt;

`l2t-fab-footer` is a footer toolbar with a cut out for a FAB in the centre.

<!--
```
<custom-element-demo>
  <template>
    <script type="module">
      import './l2t-fab-footer/l2t-fab-footer.js';
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<l2t-fab-footer icon="create"></l2t-fab-footer>
```

See: [Documentation](https://www.webcomponents.org/element/l2t-fab-footer), [Demo](https://www.webcomponents.org/element/l2t-fab-footer/demo/demo/index.html).

## Usage

### Installation

```
npm install --save link2twenty/l2t-fab-footer
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import './l2t-fab-footer/l2t-fab-footer.js';
    </script>
  </head>
  <body>
    <l2t-fab-footer icon="favorite"></l2t-fab-footer>
  </body>
</html>
```

### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import './l2t-fab-footer/l2t-fab-footer.js';
import '@polymer/iron-icons/iron-icons.html';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <l2t-fab-footer icon="favorite"></l2t-fab-footer>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Styling

The following custom properties are available for styling:

| Custom property | Description | Default |
|----------------|-------------|-------------|
| --fab-footer-height | The height of the footer element | 42px |
| --fab-footer-background | The color of the footer element's background | --primary-color |
| --fab-footer-color | The color of the footer element's text/icons | --dark-theme-text-color |

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/link2twenty/l2t-fab-footer
cd l2t-fab-footer
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://localhost:<port>/demo/
```
