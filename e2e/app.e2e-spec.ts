import { FrontendNewsrssPage } from './app.po';

describe('frontend-newsrss App', function() {
  let page: FrontendNewsrssPage;

  beforeEach(() => {
    page = new FrontendNewsrssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
