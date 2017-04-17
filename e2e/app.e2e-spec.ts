import { CookbookAngular2Page } from './app.po';

describe('cookbook-angular2 App', () => {
  let page: CookbookAngular2Page;

  beforeEach(() => {
    page = new CookbookAngular2Page();
  });

  it('should display the title saying Cookbook A2', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Cookbook A2');
  });
});
