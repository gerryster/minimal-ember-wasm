import { module, test } from 'qunit';
import { setupRenderingTest } from 'minimal-ember-wasm/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hello', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Content />`);

    assert.dom(this.element).hasText('');
  });
});
