import { SomberSitePage } from './app.po';

describe('somber-site App', () => {
  let page: SomberSitePage;

  beforeEach(() => {
    page = new SomberSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
