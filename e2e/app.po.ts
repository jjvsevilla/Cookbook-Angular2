import { browser, element, by } from 'protractor';

export class CookbookAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root .brand-logo.right')).getText();
  }
}
