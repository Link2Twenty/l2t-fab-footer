## &lt;l2t-fab-footer&gt;

`l2t-fab-footer` is a footer toolbar with a cut out for a FAB in the centre.

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
      import 'link2twenty/l2t-fab-footer/l2t-fab-footer.js';
      import '@polymer/iron-icons/iron-icons.html';
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
import '@polymer/l2t-fab-footer/l2t-fab-footer.js';
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