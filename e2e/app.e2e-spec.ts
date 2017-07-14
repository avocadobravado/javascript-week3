import { JavascriptWeek3Page } from './app.po';

describe('javascript-week3 App', () => {
  let page: JavascriptWeek3Page;

  beforeEach(() => {
    page = new JavascriptWeek3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
