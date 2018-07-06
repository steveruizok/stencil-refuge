import { TestWindow } from '@stencil/core/testing';
import { RefugeDetail } from './refuge-detail';

describe('refuge-detail', () => {
  it('should build', () => {
    expect(new RefugeDetail()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRefugeDetailElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RefugeDetail],
        html: '<refuge-detail></refuge-detail>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
