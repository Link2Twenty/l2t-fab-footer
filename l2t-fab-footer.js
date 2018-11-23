import {
  LitElement,
  html
} from '@polymer/lit-element';
import '@polymer/paper-fab/paper-fab.js';
import '@polymer/iron-icons/iron-icons.js';

/**
`l2t-fab-footer` is a footer with an FAB placed at the center. When the
user touches the button, a ripple effect emanates from the center and a fab-tab
event is fired.

`l2t-fab-footer` does not include a default icon set. To use icons from the
default set, include `PolymerElements/iron-icons/iron-icons.html`, and use the
`icon` attribute to specify which icon from the icon set to use.

    <l2t-fab-footer icon="menu"></l2t-fab-footer>

See [`iron-iconset`](iron-iconset) for more information about
how to use a custom icon set.

Example:

    <script type="module">
      import './l2t-fab-footer/l2t-fab-footer.js';
    </script>

    <l2t-fab-footer icon="favorite"></l2t-fab-footer>

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--fab-footer-height` | The height of the footer element | `42px`
`--fab-footer-background` | The color of the footer element's background | `--primary-color`
`--fab-footer-color` | The color of the footer element's text/icons | `--dark-theme-text-color`

@group l2t Elements
@element l2t-fab-footer
@demo demo/index.html
*/

class l2tFABFooter extends LitElement {
  render(icon) {
    return html `
      <style>
        :host(:not([hidden])) {
          display: block;
          width: 100%;
        }

        :host([mini]) {
          --icon-size: 40;
        }

        :host {
          --cut-out-calc: calc(var(--icon-size, 54) / 54);
          padding-top: calc(28px * var(--cut-out-calc));
        }

        app-toolbar {
          display: flex;
          position: relative;
          height: var(--fab-footer-height, 42px);
          padding: 0;
          width: 100%;
        }

        app-toolbar::before {
          --cut-out-calc: calc(var(--icon-size, 54) / 54);
          position: absolute;
          display: block;
          content: '';
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--fab-footer-background, var(--primary-color));
          clip-path: polygon(0 0, calc(50% - 38px * var(--cut-out-calc)) 0, calc(50% - 37.49px * var(--cut-out-calc)) calc(.63px * var(--cut-out-calc)), calc(50% - 36.98px * var(--cut-out-calc)) calc(1.26px * var(--cut-out-calc)), calc(50% - 36.46px * var(--cut-out-calc)) calc(1.88px * var(--cut-out-calc)), calc(50% - 35.91px * var(--cut-out-calc)) calc(2.51px * var(--cut-out-calc)), calc(50% - 35.86px * var(--cut-out-calc)) calc(3.14px * var(--cut-out-calc)), calc(50% - 35.8px * var(--cut-out-calc)) calc(3.76px * var(--cut-out-calc)), calc(50% - 35.73px * var(--cut-out-calc)) calc(4.39px * var(--cut-out-calc)), calc(50% - 35.56px * var(--cut-out-calc)) calc(5.63px * var(--cut-out-calc)), calc(50% - 35.45px * var(--cut-out-calc)) calc(6.25px * var(--cut-out-calc)), calc(50% - 35.34px * var(--cut-out-calc)) calc(6.87px * var(--cut-out-calc)), calc(50% - 35.21px * var(--cut-out-calc)) calc(7.48px * var(--cut-out-calc)), calc(50% - 35.08px * var(--cut-out-calc)) calc(8.1px * var(--cut-out-calc)), calc(50% - 34.93px * var(--cut-out-calc)) calc(8.71px * var(--cut-out-calc)), calc(50% - 34.77px * var(--cut-out-calc)) calc(9.32px * var(--cut-out-calc)), calc(50% - 34.61px * var(--cut-out-calc)) calc(9.92px * var(--cut-out-calc)), calc(50% - 34.43px * var(--cut-out-calc)) calc(10.53px * var(--cut-out-calc)), calc(50% - 34.24px * var(--cut-out-calc)) calc(11.12px * var(--cut-out-calc)), calc(50% - 34.04px * var(--cut-out-calc)) calc(11.72px * var(--cut-out-calc)), calc(50% - 33.83px * var(--cut-out-calc)) calc(12.31px * var(--cut-out-calc)), calc(50% - 33.61px * var(--cut-out-calc)) calc(12.9px * var(--cut-out-calc)), calc(50% - 33.38px * var(--cut-out-calc)) calc(13.49px * var(--cut-out-calc)), calc(50% - 33.14px * var(--cut-out-calc)) calc(14.07px * var(--cut-out-calc)), calc(50% - 32.89px * var(--cut-out-calc)) calc(14.64px * var(--cut-out-calc)), calc(50% - 32.63px * var(--cut-out-calc)) calc(15.21px * var(--cut-out-calc)), calc(50% - 32.36px * var(--cut-out-calc)) calc(15.78px * var(--cut-out-calc)), calc(50% - 32.08px * var(--cut-out-calc)) calc(16.34px * var(--cut-out-calc)), calc(50% - 31.79px * var(--cut-out-calc)) calc(16.9px * var(--cut-out-calc)), calc(50% - 31.49px * var(--cut-out-calc)) calc(17.45px * var(--cut-out-calc)), calc(50% - 31.18px * var(--cut-out-calc)) calc(18px * var(--cut-out-calc)), calc(50% - 30.86px * var(--cut-out-calc)) calc(18.54px * var(--cut-out-calc)), calc(50% - 30.53px * var(--cut-out-calc)) calc(19.08px * var(--cut-out-calc)), calc(50% - 30.19px * var(--cut-out-calc)) calc(19.61px * var(--cut-out-calc)), calc(50% - 29.85px * var(--cut-out-calc)) calc(20.13px * var(--cut-out-calc)), calc(50% - 29.49px * var(--cut-out-calc)) calc(20.65px * var(--cut-out-calc)), calc(50% - 29.12px * var(--cut-out-calc)) calc(21.16px * var(--cut-out-calc)), calc(50% - 28.75px * var(--cut-out-calc)) calc(21.67px * var(--cut-out-calc)), calc(50% - 28.37px * var(--cut-out-calc)) calc(22.16px * var(--cut-out-calc)), calc(50% - 27.98px * var(--cut-out-calc)) calc(22.66px * var(--cut-out-calc)), calc(50% - 27.58px * var(--cut-out-calc)) calc(23.14px * var(--cut-out-calc)), calc(50% - 27.17px * var(--cut-out-calc)) calc(23.62px * var(--cut-out-calc)), calc(50% - 26.75px * var(--cut-out-calc)) calc(24.09px * var(--cut-out-calc)), calc(50% - 26.33px * var(--cut-out-calc)) calc(24.55px * var(--cut-out-calc)), calc(50% - 25.9px * var(--cut-out-calc)) calc(25.01px * var(--cut-out-calc)), calc(50% - 25.46px * var(--cut-out-calc)) calc(25.46px * var(--cut-out-calc)), calc(50% - 25.01px * var(--cut-out-calc)) calc(25.9px * var(--cut-out-calc)), calc(50% - 24.55px * var(--cut-out-calc)) calc(26.33px * var(--cut-out-calc)), calc(50% - 24.09px * var(--cut-out-calc)) calc(26.75px * var(--cut-out-calc)), calc(50% - 23.62px * var(--cut-out-calc)) calc(27.17px * var(--cut-out-calc)), calc(50% - 23.14px * var(--cut-out-calc)) calc(27.58px * var(--cut-out-calc)), calc(50% - 22.66px * var(--cut-out-calc)) calc(27.98px * var(--cut-out-calc)), calc(50% - 22.16px * var(--cut-out-calc)) calc(28.37px * var(--cut-out-calc)), calc(50% - 21.67px * var(--cut-out-calc)) calc(28.75px * var(--cut-out-calc)), calc(50% - 21.16px * var(--cut-out-calc)) calc(29.12px * var(--cut-out-calc)), calc(50% - 20.65px * var(--cut-out-calc)) calc(29.49px * var(--cut-out-calc)), calc(50% - 20.13px * var(--cut-out-calc)) calc(29.85px * var(--cut-out-calc)), calc(50% - 19.61px * var(--cut-out-calc)) calc(30.19px * var(--cut-out-calc)), calc(50% - 19.08px * var(--cut-out-calc)) calc(30.53px * var(--cut-out-calc)), calc(50% - 18.54px * var(--cut-out-calc)) calc(30.86px * var(--cut-out-calc)), calc(50% - 18px * var(--cut-out-calc)) calc(31.18px * var(--cut-out-calc)), calc(50% - 17.45px * var(--cut-out-calc)) calc(31.49px * var(--cut-out-calc)), calc(50% - 16.9px * var(--cut-out-calc)) calc(31.79px * var(--cut-out-calc)), calc(50% - 16.34px * var(--cut-out-calc)) calc(32.08px * var(--cut-out-calc)), calc(50% - 15.78px * var(--cut-out-calc)) calc(32.36px * var(--cut-out-calc)), calc(50% - 15.21px * var(--cut-out-calc)) calc(32.63px * var(--cut-out-calc)), calc(50% - 14.64px * var(--cut-out-calc)) calc(32.89px * var(--cut-out-calc)), calc(50% - 14.07px * var(--cut-out-calc)) calc(33.14px * var(--cut-out-calc)), calc(50% - 13.49px * var(--cut-out-calc)) calc(33.38px * var(--cut-out-calc)), calc(50% - 12.9px * var(--cut-out-calc)) calc(33.61px * var(--cut-out-calc)), calc(50% - 12.31px * var(--cut-out-calc)) calc(33.83px * var(--cut-out-calc)), calc(50% - 11.72px * var(--cut-out-calc)) calc(34.04px * var(--cut-out-calc)), calc(50% - 11.12px * var(--cut-out-calc)) calc(34.24px * var(--cut-out-calc)), calc(50% - 10.53px * var(--cut-out-calc)) calc(34.43px * var(--cut-out-calc)), calc(50% - 9.92px * var(--cut-out-calc)) calc(34.61px * var(--cut-out-calc)), calc(50% - 9.32px * var(--cut-out-calc)) calc(34.77px * var(--cut-out-calc)), calc(50% - 8.71px * var(--cut-out-calc)) calc(34.93px * var(--cut-out-calc)), calc(50% - 8.1px * var(--cut-out-calc)) calc(35.08px * var(--cut-out-calc)), calc(50% - 7.48px * var(--cut-out-calc)) calc(35.21px * var(--cut-out-calc)), calc(50% - 6.87px * var(--cut-out-calc)) calc(35.34px * var(--cut-out-calc)), calc(50% - 6.25px * var(--cut-out-calc)) calc(35.45px * var(--cut-out-calc)), calc(50% - 5.63px * var(--cut-out-calc)) calc(35.56px * var(--cut-out-calc)), calc(50% - 5.01px * var(--cut-out-calc)) calc(35.65px * var(--cut-out-calc)), calc(50% - 4.39px * var(--cut-out-calc)) calc(35.73px * var(--cut-out-calc)), calc(50% - 3.76px * var(--cut-out-calc)) calc(35.8px * var(--cut-out-calc)), calc(50% - 3.14px * var(--cut-out-calc)) calc(35.86px * var(--cut-out-calc)), calc(50% - 2.51px * var(--cut-out-calc)) calc(35.91px * var(--cut-out-calc)), calc(50% - 1.88px * var(--cut-out-calc)) calc(35.95px * var(--cut-out-calc)), calc(50% - 1.26px * var(--cut-out-calc)) calc(35.98px * var(--cut-out-calc)), calc(50% - 00.63px * var(--cut-out-calc)) calc(35.99px * var(--cut-out-calc)), 50% calc(36px * var(--cut-out-calc)), calc(50% + 00.63px * var(--cut-out-calc)) calc(35.99px * var(--cut-out-calc)), calc(50% + 1.26px * var(--cut-out-calc)) calc(35.98px * var(--cut-out-calc)), calc(50% + 1.88px * var(--cut-out-calc)) calc(35.95px * var(--cut-out-calc)), calc(50% + 2.51px * var(--cut-out-calc)) calc(35.91px * var(--cut-out-calc)), calc(50% + 3.14px * var(--cut-out-calc)) calc(35.86px * var(--cut-out-calc)), calc(50% + 3.76px * var(--cut-out-calc)) calc(35.8px * var(--cut-out-calc)), calc(50% + 4.39px * var(--cut-out-calc)) calc(35.73px * var(--cut-out-calc)), calc(50% + 5.01px * var(--cut-out-calc)) calc(35.65px * var(--cut-out-calc)), calc(50% + 5.63px * var(--cut-out-calc)) calc(35.56px * var(--cut-out-calc)), calc(50% + 6.25px * var(--cut-out-calc)) calc(35.45px * var(--cut-out-calc)), calc(50% + 6.87px * var(--cut-out-calc)) calc(35.34px * var(--cut-out-calc)), calc(50% + 7.48px * var(--cut-out-calc)) calc(35.21px * var(--cut-out-calc)), calc(50% + 8.1px * var(--cut-out-calc)) calc(35.08px * var(--cut-out-calc)), calc(50% + 8.71px * var(--cut-out-calc)) calc(34.93px * var(--cut-out-calc)), calc(50% + 9.32px * var(--cut-out-calc)) calc(34.77px * var(--cut-out-calc)), calc(50% + 9.92px * var(--cut-out-calc)) calc(34.61px * var(--cut-out-calc)), calc(50% + 10.53px * var(--cut-out-calc)) calc(34.43px * var(--cut-out-calc)), calc(50% + 11.12px * var(--cut-out-calc)) calc(34.24px * var(--cut-out-calc)), calc(50% + 11.72px * var(--cut-out-calc)) calc(34.04px * var(--cut-out-calc)), calc(50% + 12.31px * var(--cut-out-calc)) calc(33.83px * var(--cut-out-calc)), calc(50% + 12.9px * var(--cut-out-calc)) calc(33.61px * var(--cut-out-calc)), calc(50% + 13.49px * var(--cut-out-calc)) calc(33.38px * var(--cut-out-calc)), calc(50% + 14.07px * var(--cut-out-calc)) calc(33.14px * var(--cut-out-calc)), calc(50% + 14.64px * var(--cut-out-calc)) calc(32.89px * var(--cut-out-calc)), calc(50% + 15.21px * var(--cut-out-calc)) calc(32.63px * var(--cut-out-calc)), calc(50% + 15.78px * var(--cut-out-calc)) calc(32.36px * var(--cut-out-calc)), calc(50% + 16.34px * var(--cut-out-calc)) calc(32.08px * var(--cut-out-calc)), calc(50% + 16.9px * var(--cut-out-calc)) calc(31.79px * var(--cut-out-calc)), calc(50% + 17.45px * var(--cut-out-calc)) calc(31.49px * var(--cut-out-calc)), calc(50% + 18px * var(--cut-out-calc)) calc(31.18px * var(--cut-out-calc)), calc(50% + 18.54px * var(--cut-out-calc)) calc(30.86px * var(--cut-out-calc)), calc(50% + 19.08px * var(--cut-out-calc)) calc(30.53px * var(--cut-out-calc)), calc(50% + 19.61px * var(--cut-out-calc)) calc(30.19px * var(--cut-out-calc)), calc(50% + 20.13px * var(--cut-out-calc)) calc(29.85px * var(--cut-out-calc)), calc(50% + 20.65px * var(--cut-out-calc)) calc(29.49px * var(--cut-out-calc)), calc(50% + 21.16px * var(--cut-out-calc)) calc(29.12px * var(--cut-out-calc)), calc(50% + 21.67px * var(--cut-out-calc)) calc(28.75px * var(--cut-out-calc)), calc(50% + 22.16px * var(--cut-out-calc)) calc(28.37px * var(--cut-out-calc)), calc(50% + 22.66px * var(--cut-out-calc)) calc(27.98px * var(--cut-out-calc)), calc(50% + 23.14px * var(--cut-out-calc)) calc(27.58px * var(--cut-out-calc)), calc(50% + 23.62px * var(--cut-out-calc)) calc(27.17px * var(--cut-out-calc)), calc(50% + 24.09px * var(--cut-out-calc)) calc(26.75px * var(--cut-out-calc)), calc(50% + 24.55px * var(--cut-out-calc)) calc(26.33px * var(--cut-out-calc)), calc(50% + 25.01px * var(--cut-out-calc)) calc(25.9px * var(--cut-out-calc)), calc(50% + 25.46px * var(--cut-out-calc)) calc(25.46px * var(--cut-out-calc)), calc(50% + 25.9px * var(--cut-out-calc)) calc(25.01px * var(--cut-out-calc)), calc(50% + 26.33px * var(--cut-out-calc)) calc(24.55px * var(--cut-out-calc)), calc(50% + 26.75px * var(--cut-out-calc)) calc(24.09px * var(--cut-out-calc)), calc(50% + 27.17px * var(--cut-out-calc)) calc(23.62px * var(--cut-out-calc)), calc(50% + 27.58px * var(--cut-out-calc)) calc(23.14px * var(--cut-out-calc)), calc(50% + 27.98px * var(--cut-out-calc)) calc(22.66px * var(--cut-out-calc)), calc(50% + 28.37px * var(--cut-out-calc)) calc(22.16px * var(--cut-out-calc)), calc(50% + 28.75px * var(--cut-out-calc)) calc(21.67px * var(--cut-out-calc)), calc(50% + 29.12px * var(--cut-out-calc)) calc(21.16px * var(--cut-out-calc)), calc(50% + 29.49px * var(--cut-out-calc)) calc(20.65px * var(--cut-out-calc)), calc(50% + 29.85px * var(--cut-out-calc)) calc(20.13px * var(--cut-out-calc)), calc(50% + 30.19px * var(--cut-out-calc)) calc(19.61px * var(--cut-out-calc)), calc(50% + 30.53px * var(--cut-out-calc)) calc(19.08px * var(--cut-out-calc)), calc(50% + 30.86px * var(--cut-out-calc)) calc(18.54px * var(--cut-out-calc)), calc(50% + 31.18px * var(--cut-out-calc)) calc(18px * var(--cut-out-calc)), calc(50% + 31.49px * var(--cut-out-calc)) calc(17.45px * var(--cut-out-calc)), calc(50% + 31.79px * var(--cut-out-calc)) calc(16.9px * var(--cut-out-calc)), calc(50% + 32.08px * var(--cut-out-calc)) calc(16.34px * var(--cut-out-calc)), calc(50% + 32.36px * var(--cut-out-calc)) calc(15.78px * var(--cut-out-calc)), calc(50% + 32.63px * var(--cut-out-calc)) calc(15.21px * var(--cut-out-calc)), calc(50% + 32.89px * var(--cut-out-calc)) calc(14.64px * var(--cut-out-calc)), calc(50% + 33.14px * var(--cut-out-calc)) calc(14.07px * var(--cut-out-calc)), calc(50% + 33.38px * var(--cut-out-calc)) calc(13.49px * var(--cut-out-calc)), calc(50% + 33.61px * var(--cut-out-calc)) calc(12.9px * var(--cut-out-calc)), calc(50% + 33.83px * var(--cut-out-calc)) calc(12.31px * var(--cut-out-calc)), calc(50% + 34.04px * var(--cut-out-calc)) calc(11.72px * var(--cut-out-calc)), calc(50% + 34.24px * var(--cut-out-calc)) calc(11.12px * var(--cut-out-calc)), calc(50% + 34.43px * var(--cut-out-calc)) calc(10.53px * var(--cut-out-calc)), calc(50% + 34.61px * var(--cut-out-calc)) calc(9.92px * var(--cut-out-calc)), calc(50% + 34.77px * var(--cut-out-calc)) calc(9.32px * var(--cut-out-calc)), calc(50% + 34.93px * var(--cut-out-calc)) calc(8.71px * var(--cut-out-calc)), calc(50% + 35.08px * var(--cut-out-calc)) calc(8.1px * var(--cut-out-calc)), calc(50% + 35.21px * var(--cut-out-calc)) calc(7.48px * var(--cut-out-calc)), calc(50% + 35.34px * var(--cut-out-calc)) calc(6.87px * var(--cut-out-calc)), calc(50% + 35.45px * var(--cut-out-calc)) calc(6.25px * var(--cut-out-calc)), calc(50% + 35.56px * var(--cut-out-calc)) calc(5.63px * var(--cut-out-calc)), calc(50% + 35.65px * var(--cut-out-calc)) calc(5.01px * var(--cut-out-calc)), calc(50% + 35.73px * var(--cut-out-calc)) calc(4.39px * var(--cut-out-calc)), calc(50% + 35.8px * var(--cut-out-calc)) calc(3.76px * var(--cut-out-calc)), calc(50% + 35.86px * var(--cut-out-calc)) calc(3.14px * var(--cut-out-calc)), calc(50% + 35.91px * var(--cut-out-calc)) calc(2.51px * var(--cut-out-calc)), calc(50% + 36.46px * var(--cut-out-calc)) calc(1.88px * var(--cut-out-calc)), calc(50% + 36.98px * var(--cut-out-calc)) calc(1.26px * var(--cut-out-calc)), calc(50% + 37.49px * var(--cut-out-calc)) calc(.63px * var(--cut-out-calc)), calc(50% + 38px * var(--cut-out-calc)) 0, 100% 0, 100% 100%, 0 100%)
        }

        ::slotted(*) {
          z-index: 2;
          color: var(--fab-footer-color, var(--dark-theme-text-color));
        }

        paper-fab {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 0;
          z-index: 9999;
        }
      </style>

      <app-toolbar>
        <slot></slot>
        <paper-fab 
          @tap=${e => this._bubbleClick()}
          .src="${this.src}"
          .icon="${this.icon}"
          ?mini="${this.mini}"
          ?noink="${this.noink}"
          ?disabled="${this.disabled}"
          .label="${this.label}">
        </paper-fab>
      </app-toolbar>
    `
  }

  static get properties() {
    return {
      /**
       * The URL of an image for the icon. If the src property is specified,
       * the icon property should not be.
       */
      src: {type: String, value: ''},

      /**
       * Specifies the icon name or index in the set of icons available in
       * the icon's icon set. If the icon property is specified,
       * the src property should not be.
       */
      icon: {type: String, value: ''},

      /**
       * Set this to true to disabled the FAB.
       */
      disabled: {type: Boolean, value: false, reflectToAttribute: true},

      /**
       * Set this to true to style this is a "mini" FAB.
       */
      mini: {type: Boolean, value: false, reflectToAttribute: true},

      /**
       * Set this to true to style this is a "noink" FAB.
       */
      noink: {type: Boolean, value: false, reflectToAttribute: true},

      /**
       * The label displayed in the badge. The label is centered, and ideally
       * should have very few characters.
       */
      label: {type: String, observer: '_labelChanged'}
    }
  }

  _bubbleClick() {
    this.dispatchEvent(new CustomEvent('fab-tap'));
  }
}

window.customElements.define('l2t-fab-footer', l2tFABFooter);
