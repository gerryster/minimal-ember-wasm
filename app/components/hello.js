// import { greet } from 'minimal-rust-wasm';

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ContentComponent extends Component {
  @action
  helloEmber() {
    alert('Hello from Ember!');
  }

  @action
  helloRustWasm() {
    // greet();
  }
}
