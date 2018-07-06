import { TestWindow } from '@stencil/core/testing';
import { RefIcon } from './ref-icon';

describe('ref-icon', () => {
  it('should build', () => {
    expect(new RefIcon()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRefIconElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RefIcon],
        html: '<ref-icon></ref-icon>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
