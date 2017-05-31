import { PunkIpaBeersPage } from './app.po';

describe('punk-ipa-beers App', function() {
  let page: PunkIpaBeersPage;

  beforeEach(() => {
    page = new PunkIpaBeersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
