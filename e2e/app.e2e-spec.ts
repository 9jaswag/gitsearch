import { GitsearchPage } from './app.po';

describe('gitsearch App', function() {
  let page: GitsearchPage;

  beforeEach(() => {
    page = new GitsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
