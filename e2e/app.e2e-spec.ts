import { CookbookAngular2Page } from './app.po';

describe('cookbook-angular2 App', () => {
  let page: CookbookAngular2Page;

  beforeEach(() => {
    page = new CookbookAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
