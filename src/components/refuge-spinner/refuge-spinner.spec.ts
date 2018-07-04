import { TestWindow } from '@stencil/core/testing';
import { RefugeSpinner } from './refuge-spinner';

describe('refuge-spinner', () => {
  it('should build', () => {
    expect(new RefugeSpinner()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRefugeSpinnerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RefugeSpinner],
        html: '<refuge-spinner></refuge-spinner>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
